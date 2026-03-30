import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar.jsx";

const BADGE_ABONNEMENT = {
  PREMIUM: "text-primary border border-primary",
  BASIC: "text-secondary border border-secondary",
  ENTERPRISE: "text-warning border border-warning",
  PRO: "text-success border border-success",
};

function Guesthouses() {
  const navigate = useNavigate();
  const location = useLocation();
  const [recherche, setRecherche] = useState("");
  const [filtreStatut, setFiltreStatut] = useState("Tous");
  const [filtreAbonnement, setFiltreAbonnement] = useState("Tous");
  const [guesthouses, setGuesthouses] = useState([]);

  // Recharger les données quand on arrive sur la page
  useEffect(() => {
    const data = localStorage.getItem("guesthouses");
    setGuesthouses(data ? JSON.parse(data) : []);
  }, [location]);

  const handleSupprimer = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette guesthouse ?")) {
      const updated = guesthouses.filter((g) => g.id !== id);
      localStorage.setItem("guesthouses", JSON.stringify(updated));
      setGuesthouses(updated);
    }
  };

  const guesthousesFiltrees = guesthouses.filter((g) => {
    const matchRecherche =
      g.nom.toLowerCase().includes(recherche.toLowerCase()) ||
      g.proprietaire.toLowerCase().includes(recherche.toLowerCase()) ||
      g.localisation.toLowerCase().includes(recherche.toLowerCase());
    const matchStatut = filtreStatut === "Tous" || g.statut === filtreStatut;
    const matchAbonnement = filtreAbonnement === "Tous" || g.abonnement === filtreAbonnement;
    return matchRecherche && matchStatut && matchAbonnement;
  });

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ marginLeft: "280px", width: "calc(100% - 280px)", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        
        {/* Top Bar */}
        <div className="bg-white border-bottom px-4 py-2 d-flex justify-content-between align-items-center">
          <div className="input-group" style={{ maxWidth: "360px" }}>
            <span className="input-group-text bg-white border-end-0"><i className="bi bi-search text-muted"></i></span>
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Rechercher..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
            />
          </div>
          {/* Mise à jour du lien vers ta route correcte */}
          <button className="btn btn-primary d-flex align-items-center gap-2" onClick={() => navigate("/ajouter-guesthouse")}>
            <i className="bi bi-plus-circle"></i> Ajouter une Guesthouse
          </button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <h1 className="h3 fw-bold mb-1">Guesthouses</h1>
            <p className="text-muted small">Gérez les guesthouses enregistrées sur votre réseau.</p>
          </div>

          {/* Filtres Rapides */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div className="d-flex gap-2">
              {["Tous", "Actif", "Inactif"].map((s) => (
                <button
                  key={s}
                  className={`btn btn-sm ${filtreStatut === s ? "btn-primary" : "btn-outline-secondary"}`}
                  onClick={() => setFiltreStatut(s)}
                >
                  {s === "Tous" ? "Toutes" : s}
                </button>
              ))}
            </div>
            <select className="form-select form-select-sm" style={{ width: "200px" }} value={filtreAbonnement} onChange={(e) => setFiltreAbonnement(e.target.value)}>
              <option value="Tous">Tous les abonnements</option>
              <option value="BASIC">BASIC</option>
              <option value="PRO">PRO</option>
              <option value="PREMIUM">PREMIUM</option>
              <option value="ENTERPRISE">ENTERPRISE</option>
            </select>
          </div>

          {/* Tableau */}
          <div className="card border-0 shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="ps-4 py-3 small fw-bold">NOM</th>
                    <th className="py-3 small fw-bold">PROPRIÉTAIRE</th>
                    <th className="py-3 small fw-bold">LOCALISATION</th>
                    <th className="py-3 small fw-bold">ABONNEMENT</th>
                    <th className="py-3 small fw-bold">STATUT</th>
                    <th className="py-3 small fw-bold">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {guesthousesFiltrees.length === 0 ? (
                    <tr><td colSpan="6" className="text-center py-5 text-muted">Aucun résultat</td></tr>
                  ) : (
                    guesthousesFiltrees.map((g) => (
                      <tr key={g.id}>
                        <td className="ps-4">
                          <div className="d-flex align-items-center gap-2">
                            <div className="bg-primary bg-opacity-10 p-2 rounded text-primary"><i className="bi bi-building"></i></div>
                            <span className="fw-semibold">{g.nom}</span>
                          </div>
                        </td>
                        <td>{g.proprietaire}</td>
                        <td><i className="bi bi-geo-alt me-1 text-muted"></i>{g.localisation}</td>
                        <td>
                          <span className={`badge bg-transparent rounded-pill ${BADGE_ABONNEMENT[g.abonnement] || "text-secondary border border-secondary"}`}>
                            {g.abonnement}
                          </span>
                        </td>
                        <td>
                          <span className={g.statut === "Actif" ? "text-success" : "text-danger"}>
                            ● {g.statut}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            {/* Navigation vers /ajouter-guesthouse avec l'ID en paramètre URL */}
                            <button className="btn btn-sm btn-light text-primary fw-bold" onClick={() => navigate(`/ajouter-guesthouse?edit=${g.id}`)}>Gérer</button>
                            <button className="btn btn-sm btn-light text-danger" onClick={() => handleSupprimer(g.id)}><i className="bi bi-trash"></i></button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guesthouses;
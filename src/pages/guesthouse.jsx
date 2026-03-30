import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar.jsx";

const GUESTHOUSES_INITIALES = [
  {
    nom: "Résidence Awoba",
    proprietaire: "Koffi Mensah",
    localisation: "Cotonou, Bénin",
    abonnement: "PREMIUM",
    statut: "Actif",
    image: "src/images/c01259964f173771ffc0b2552902296cb9c1bd78.jpg",
  },
  {
    nom: "Hôtel de la Plage",
    proprietaire: "Agbossa Victor",
    localisation: "Porto-Novo, Bénin",
    abonnement: "BASIC",
    statut: "Actif",
    image: "src/images/d407e10bc9fa272069b8b0102ec78d09cb952d62.jpg",
  },
  {
    nom: "Le Relais de Parakou",
    proprietaire: "Olou Chantal",
    localisation: "Parakou, Bénin",
    abonnement: "ENTERPRISE",
    statut: "Inactif",
    image: "src/images/dca3919df14d208a9980df8031d0a1a871e3059c.jpg",
  },
  {
    nom: "Palais d'Abomey",
    proprietaire: "Soglo Patrice",
    localisation: "Abomey, Bénin",
    abonnement: "PREMIUM",
    statut: "Actif",
    image: "src/images/f944ef459e29be6b6fed2cafb4790c389a4bfdcd.jpg",
  },
];

const BADGE_ABONNEMENT = {
  PREMIUM: "text-primary border border-primary",
  BASIC: "text-secondary border border-secondary",
  ENTERPRISE: "text-warning border border-warning",
  PRO: "text-success border border-success",
};

function Guesthouses() {
  const navigate = useNavigate();
  const [recherche, setRecherche] = useState("");
  const [filtreStatut, setFiltreStatut] = useState("Tous");
  const [filtreAbonnement, setFiltreAbonnement] = useState("Tous");

  const guesthouses = GUESTHOUSES_INITIALES;

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

      <div
        style={{
          marginLeft: "280px",
          width: "calc(100% - 280px)",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >

        <div className="bg-white border-bottom px-4 py-2 d-flex justify-content-between align-items-center">
          <div className="input-group" style={{ maxWidth: "360px" }}>
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search text-muted"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Rechercher des guesthouses, propriétaires, lieux..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-bell fs-5 text-muted"></i>
            <button
              className="btn btn-primary d-flex align-items-center gap-2"
              onClick={() => navigate("/guesthouse/ajouter")}
            >
              <i className="bi bi-plus-circle"></i>
              Ajouter une Guesthouse
            </button>
          </div>
        </div>

        <div className="p-4">


          <div className="mb-4">
            <h1 className="h3 fw-bold mb-1">Guesthouses</h1>
            <p className="text-muted mb-0 small">
              Gérez et surveillez toutes les guesthouses enregistrées sur votre réseau.
            </p>
          </div>


          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">

            <div className="d-flex gap-2">
              {["Tous", "Actif", "Inactif"].map((statut) => (
                <button
                  key={statut}
                  className={`btn btn-sm ${
                    filtreStatut === statut
                      ? "btn-primary"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setFiltreStatut(statut)}
                >
                  {statut === "Tous" ? "Toutes les Guesthouses" : statut}
                </button>
              ))}
            </div>


            <div className="d-flex gap-2">
              <select
                className="form-select form-select-sm"
                style={{ width: "220px" }}
                value={filtreAbonnement}
                onChange={(e) => setFiltreAbonnement(e.target.value)}
              >
                <option value="Tous">Tous les types d'abonnement</option>
                <option value="BASIC">BASIC</option>
                <option value="PREMIUM">PREMIUM</option>
                <option value="ENTERPRISE">ENTERPRISE</option>
                <option value="PRO">PRO</option>
              </select>
              <button className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1">
                <i className="bi bi-funnel"></i>
                Plus de filtres
              </button>
            </div>
          </div>


          <div className="card border-0 shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="border-bottom">
                  <tr>
                    <th className="text-uppercase small text-muted fw-semibold ps-4 py-3">
                      Nom de la Guesthouse
                    </th>
                    <th className="text-uppercase small text-muted fw-semibold py-3">
                      Propriétaire
                    </th>
                    <th className="text-uppercase small text-muted fw-semibold py-3">
                      Localisation
                    </th>
                    <th className="text-uppercase small text-muted fw-semibold py-3">
                      Type d'abonnement
                    </th>
                    <th className="text-uppercase small text-muted fw-semibold py-3">
                      Statut
                    </th>
                    <th className="text-uppercase small text-muted fw-semibold py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {guesthousesFiltrees.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center text-muted py-5">
                        <i className="bi bi-building fs-1 d-block mb-2"></i>
                        Aucune guesthouse trouvée
                      </td>
                    </tr>
                  ) : (
                    guesthousesFiltrees.map((g, index) => (
                      <tr key={index}>

                        <td className="ps-4 py-3">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={g.image}
                              alt={g.nom}
                              className="rounded"
                              style={{ width: "42px", height: "42px", objectFit: "cover" }}
                            />
                            <span className="fw-semibold">{g.nom}</span>
                          </div>
                        </td>


                        <td className="text-muted">{g.proprietaire}</td>


                        <td className="text-muted">
                          <i className="bi bi-geo-alt me-1"></i>
                          {g.localisation}
                        </td>


                        <td>
                          <span
                            className={`badge bg-transparent fw-semibold px-3 py-2 rounded-pill ${BADGE_ABONNEMENT[g.abonnement]}`}
                          >
                            {g.abonnement}
                          </span>
                        </td>


                        <td>
                          {g.statut === "Actif" ? (
                            <span className="text-success d-flex align-items-center gap-1">
                              <i className="bi bi-circle-fill" style={{ fontSize: "0.5rem" }}></i>
                              Actif
                            </span>
                          ) : (
                            <span className="text-secondary d-flex align-items-center gap-1">
                              <i className="bi bi-circle-fill" style={{ fontSize: "0.5rem" }}></i>
                              Inactif
                            </span>
                          )}
                        </td>

                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <button
                              className="btn btn-sm btn-link text-primary p-0 text-decoration-none fw-semibold"
                              onClick={() => navigate(`/guesthouse/ajouter?edit=${index}`)}
                            >
                              Gérer
                            </button>
                            <i className="bi bi-three-dots-vertical text-muted"></i>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>


            <div className="card-footer bg-white border-top d-flex justify-content-between align-items-center py-3 px-4">
              <small className="text-muted">
                Affichage de 1 à 4 sur 24 guesthouses
              </small>
              <div className="d-flex align-items-center gap-2">
                <span className="text-muted small">Toutes les Guesthouses</span>
                <button className="btn btn-sm btn-primary">Actif</button>
                <button className="btn btn-sm btn-outline-secondary">Inactif</button>
                <button className="btn btn-sm btn-outline-secondary">3</button>
                <button className="btn btn-sm btn-outline-secondary">Suivant</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Guesthouses;
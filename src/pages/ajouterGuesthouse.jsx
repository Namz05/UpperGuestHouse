import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Sidebar from "../components/sidebar.jsx";

const ABONNEMENTS = ["BASIQUE", "PREMIUM", "PRO"];

function AjouterGuesthouse() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get("edit");
  const isEditMode = !!editId;

  const [formData, setFormData] = useState({
    nom: "",
    proprietaire: "",
    localisation: "",
    abonnement: "PREMIUM",
    telephone: "",
    email: "",
    description: "",
    statut: "Actif",
  });


  useEffect(() => {
    if (isEditMode) {
      const data = localStorage.getItem("guesthouses");
      if (data) {
        const guesthouses = JSON.parse(data);
        const itemToEdit = guesthouses.find((g) => g.id === Number(editId));
        if (itemToEdit) setFormData(itemToEdit);
      }
    }
  }, [isEditMode, editId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = localStorage.getItem("guesthouses");
    let guesthouses = data ? JSON.parse(data) : [];

    if (isEditMode) {
      // Logique de mise à jour
      guesthouses = guesthouses.map((g) =>
        g.id === Number(editId) ? { ...formData, id: Number(editId) } : g
      );
    } else {
      // Logique de création
      guesthouses.push({ ...formData, id: Date.now() });
    }

    localStorage.setItem("guesthouses", JSON.stringify(guesthouses));

    navigate("/guesthouse");
  };

  return (
    <div className="d-flex bg-light min-vh-100">
      <Sidebar />
      <div style={{ marginLeft: "280px", width: "calc(100% - 280px)" }}>
        

        <div className="p-4">
          <form onSubmit={handleSubmit} className="bg-white p-5 rounded-4 shadow-sm mx-auto" style={{ maxWidth: "900px" }}>
            
            <h3 className="fw-bold mb-4">
              {isEditMode ? "Modifier la Guesthouse" : "Ajouter une Guesthouse"}
            </h3>

            <div className="row g-4">

              <div className="col-md-6">
                <label className="form-label fw-bold text-dark mb-2">Nom de la Guesthouse</label>
                <input 
                  name="nom" type="text" className="form-control form-control-lg fs-6 shadow-none" 
                  placeholder="ex: Villa Oasis Cotonou" value={formData.nom} onChange={handleChange} required 
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold text-dark mb-2">Nom du Propriétaire</label>
                <input 
                  name="proprietaire" type="text" className="form-control form-control-lg fs-6 shadow-none" 
                  placeholder="ex: Koffi Mensah" value={formData.proprietaire} onChange={handleChange} required 
                />
              </div>


              <div className="col-md-6">
                <label className="form-label fw-bold text-dark mb-2">Localisation</label>
                <select name="localisation" className="form-select form-select-lg fs-6 shadow-none" value={formData.localisation} onChange={handleChange} required>
                  <option value="">Sélectionner une ville</option>
                  <option value="Cotonou">Cotonou</option>
                  <option value="Abomey-Calavi">Abomey-Calavi</option>
                  <option value="Ouidah">Ouidah</option>
                  <option value="Porto-Novo">Porto-Novo</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold text-dark mb-2">Type d'abonnement</label>
                <div className="d-flex gap-2">
                  {ABONNEMENTS.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`btn flex-fill py-2 fw-bold border ${
                        formData.abonnement === type 
                        ? "border-primary text-primary bg-primary bg-opacity-10" 
                        : "border-light-subtle text-dark bg-white"
                      }`}
                      style={{ fontSize: "0.8rem", transition: "0.3s" }}
                      onClick={() => setFormData({ ...formData, abonnement: type })}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>


              <div className="col-12 mt-5">
                <h5 className="fw-bold mb-4">Coordonnées de Contact</h5>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold text-dark mb-2">Téléphone (WhatsApp)</label>
                <input 
                  name="telephone" type="tel" className="form-control form-control-lg fs-6 shadow-none" 
                  placeholder="+229  01 00 00 00 00" value={formData.telephone} onChange={handleChange} 
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold text-dark mb-2">Adresse Email</label>
                <input 
                  name="email" type="email" className="form-control form-control-lg fs-6 shadow-none" 
                  placeholder="contact@etablissement.bj" value={formData.email} onChange={handleChange} 
                />
              </div>


              <div className="col-12 mt-4">
                <label className="form-label fw-bold text-dark mb-2">Description détaillée</label>
                <textarea 
                  name="description" rows="4" className="form-control shadow-none" 
                  placeholder="Décrivez les atouts de la guesthouse, les équipements disponibles (Piscine, WiFi, Climatisation)..."
                  value={formData.description} onChange={handleChange}
                ></textarea>
              </div>
            </div>


            <div className="d-flex justify-content-end gap-3 mt-5">
              <button type="button" className="btn btn-link text-dark text-decoration-none fw-bold" onClick={() => navigate("/guesthouse")}>
                Annuler
              </button>
              <button type="submit" className="btn btn-primary px-4 py-2 rounded-3 fw-bold" style={{ backgroundColor: "#1d63d2" }}>
                {isEditMode ? "Mettre à jour les informations" : "Enregistrer la Guesthouse"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AjouterGuesthouse;
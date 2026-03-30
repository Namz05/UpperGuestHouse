import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Sidebar from "../components/sidebar.jsx";

const ABONNEMENTS = ["BASIC", "PRO", "PREMIUM"];
const STATUTS = ["Actif", "Inactif"];

function AjouterGuesthouse() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editParam = searchParams.get("edit");
  const editIndex = editParam !== null ? Number(editParam) : -1;
  const isEditMode = Number.isInteger(editIndex) && editIndex >= 0;

  const guesthousesData = localStorage.getItem("guesthouses");
  const guesthouses = guesthousesData ? JSON.parse(guesthousesData) : [];
  const guesthouseToEdit = isEditMode ? guesthouses[editIndex] : null;

  const [formData, setFormData] = useState({
    nom: guesthouseToEdit?.nom ?? "",
    proprietaire: guesthouseToEdit?.proprietaire ?? "",
    localisation: guesthouseToEdit?.localisation ?? "",
    abonnement: guesthouseToEdit?.abonnement ?? "BASIC",
    statut: guesthouseToEdit?.statut ?? "Actif",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const guesthousesData = localStorage.getItem("guesthouses");
    const guesthouses = guesthousesData ? JSON.parse(guesthousesData) : [];

    const newGuesthouse = {
      nom: formData.nom.trim(),
      proprietaire: formData.proprietaire.trim(),
      localisation: formData.localisation.trim(),
      abonnement: formData.abonnement,
      statut: formData.statut,
    };

    if (isEditMode && guesthouses[editIndex]) {
      guesthouses[editIndex] = newGuesthouse;
    } else {
      guesthouses.push(newGuesthouse);
    }
    localStorage.setItem("guesthouses", JSON.stringify(guesthouses));

    navigate("/guesthouse");
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div
        style={{
          marginLeft: "280px",
          width: "calc(100% - 280px)",
          backgroundColor: "white",
          minHeight: "100vh",
        }}
      >
        <div className="p-4 border-bottom">
          <h1 className="h2 mb-2">
            {isEditMode ? "Modifier une Guesthouse" : "Ajouter une Guesthouse"}
          </h1>
          <p className="text-muted mb-0">
            {isEditMode
              ? "Modifiez les informations de la guesthouse."
              : "Renseignez les informations pour creer une nouvelle guesthouse."}
          </p>
        </div>

        <div className="p-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">
                    NOM DE LA GUESTHOUSE
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    className="form-control"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="proprietaire" className="form-label">
                    PROPRIETAIRE
                  </label>
                  <input
                    id="proprietaire"
                    name="proprietaire"
                    type="text"
                    className="form-control"
                    value={formData.proprietaire}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="localisation" className="form-label">
                    LOCALISATION
                  </label>
                  <input
                    id="localisation"
                    name="localisation"
                    type="text"
                    className="form-control"
                    value={formData.localisation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="abonnement" className="form-label">
                    TYPE D'ABONNEMENT
                  </label>
                  <select
                    id="abonnement"
                    name="abonnement"
                    className="form-select"
                    value={formData.abonnement}
                    onChange={handleChange}
                    required
                  >
                    {ABONNEMENTS.map((abonnement) => (
                      <option key={abonnement} value={abonnement}>
                        {abonnement}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="statut" className="form-label">
                    STATUT
                  </label>
                  <select
                    id="statut"
                    name="statut"
                    className="form-select"
                    value={formData.statut}
                    onChange={handleChange}
                    required
                  >
                    {STATUTS.map((statut) => (
                      <option key={statut} value={statut}>
                        {statut}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    {isEditMode ? "Mettre a jour" : "Enregistrer"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/guesthouse")}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AjouterGuesthouse;

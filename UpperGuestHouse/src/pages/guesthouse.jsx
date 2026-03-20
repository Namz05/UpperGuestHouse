  import React from "react";
import Sidebar from "../components/sidebar.jsx";

function Guesthouse() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ marginLeft: "280px", width: "calc(100% - 280px)", backgroundColor: "white" }}>
        <div className="p-4 bg-white border-bottom">
          <div className="row align-items-center mb-3">
            <div className="col">
              <h1 className="h2 mb-2">Guesthouses</h1>
              <p className="text-muted mb-0">
                Gerez et surveillez toutes les guesthouses enregistrees sur votre reseau.
              </p>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary" type="button" disabled>
                <i className="bi bi-plus-circle me-2"></i>Ajouter une Guesthouse
              </button>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-12">
              <input
                type="search"
                className="form-control"
                placeholder="Rechercher des guesthouses, proprietaires, lieux..."
                disabled
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-light border-bottom">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="btn-group" role="group" aria-label="Filtres">
                <button type="button" className="btn btn-primary" disabled>
                  Toutes les Guesthouses
                </button>
                <button type="button" className="btn btn-outline-secondary" disabled>
                  Actif
                </button>
                <button type="button" className="btn btn-outline-secondary" disabled>
                  Inactif
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>NOM DE LA GUESTHOUSE</th>
                  <th>PROPRIETAIRE</th>
                  <th>LOCALISATION</th>
                  <th>TYPE D'ABONNEMENT</th>
                  <th>STATUT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>Residence Awoba</span>
                  </td>
                  <td>Koffi Mensah</td>
                  <td>
                    <i className="bi bi-geo-alt me-2"></i>
                    Cotonou, Benin
                  </td>
                  <td>
                    <span className="badge bg-info">PREMIUM</span>
                  </td>
                  <td>
                    <span className="badge bg-success">
                      <i className="bi bi-circle-fill me-1"></i>
                      Actif
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>Hotel de la Plage</span>
                  </td>
                  <td>Agbossa Victor</td>
                  <td>
                    <i className="bi bi-geo-alt me-2"></i>
                    Porto-Novo, Benin
                  </td>
                  <td>
                    <span className="badge bg-warning">BASIC</span>
                  </td>
                  <td>
                    <span className="badge bg-success">
                      <i className="bi bi-circle-fill me-1"></i>
                      Actif
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>Le Relais de Parakou</span>
                  </td>
                  <td>Olou Chantal</td>
                  <td>
                    <i className="bi bi-geo-alt me-2"></i>
                    Parakou, Benin
                  </td>
                  <td>
                    <span className="badge bg-success">PRO</span>
                  </td>
                  <td>
                    <span className="badge bg-secondary">
                      <i className="bi bi-circle-fill me-1 opacity-50"></i>
                      Inactif
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>Palais d&apos;Abomey</span>
                  </td>
                  <td>Soglo Patrice</td>
                  <td>
                    <i className="bi bi-geo-alt me-2"></i>
                    Abomey, Benin
                  </td>
                  <td>
                    <span className="badge bg-info">PREMIUM</span>
                  </td>
                  <td>
                    <span className="badge bg-success">
                      <i className="bi bi-circle-fill me-1"></i>
                      Actif
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guesthouse;

  
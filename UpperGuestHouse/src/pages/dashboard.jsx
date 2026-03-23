import React from "react";
import Sidebar from "../components/sidebar.jsx";

function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div
        style={{
          marginLeft: "280px",
          width: "calc(100% - 280px)",
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <div className="p-4 bg-white border-bottom">
          <h1 className="h2 mb-2">Dashboard</h1>
          <p className="text-muted mb-0">
            Bienvenue sur votre tableau de bord. Consultez vos statistiques et performances.
          </p>
        </div>

        <div className="p-4">
          <div className="row g-4 mb-4">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "#e7f1ff" }}>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-2">Guesthouses Actives</p>
                      <h3 className="mb-0">12</h3>
                    </div>
                    <i className="bi bi-building text-primary" style={{ fontSize: "2rem" }}></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "#e8f5e9" }}>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-2">Réservations</p>
                      <h3 className="mb-0">45</h3>
                    </div>
                    <i
                      className="bi bi-calendar-check text-success"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "#e0f7fa" }}>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-2">Clients</p>
                      <h3 className="mb-0">128</h3>
                    </div>
                    <i className="bi bi-people text-info" style={{ fontSize: "2rem" }}></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "#fff8e1" }}>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-2">Revenus</p>
                      <h3 className="mb-0">2.5M XOF</h3>
                    </div>
                    <i className="bi bi-cash-coin text-warning" style={{ fontSize: "2rem" }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-bottom">
                  <h5 className="card-title mb-0">Revenus par mois</h5>
                </div>
                <div className="card-body">
                  <div
                    style={{
                      height: "300px",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-around",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        height: "65%",
                        backgroundColor: "#007bff",
                        borderRadius: "4px 4px 0 0",
                      }}
                      title="65%"
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        height: "45%",
                        backgroundColor: "#007bff",
                        borderRadius: "4px 4px 0 0",
                      }}
                      title="45%"
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        height: "80%",
                        backgroundColor: "#007bff",
                        borderRadius: "4px 4px 0 0",
                      }}
                      title="80%"
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        height: "60%",
                        backgroundColor: "#007bff",
                        borderRadius: "4px 4px 0 0",
                      }}
                      title="60%"
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        height: "90%",
                        backgroundColor: "#007bff",
                        borderRadius: "4px 4px 0 0",
                      }}
                      title="90%"
                    ></div>
                    <div
                      style={{
                        flex: 1,
                        height: "75%",
                        backgroundColor: "#007bff",
                        borderRadius: "4px 4px 0 0",
                      }}
                      title="75%"
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between mt-3 text-muted" style={{ fontSize: "0.875rem" }}>
                    <span>Jan</span>
                    <span>Fév</span>
                    <span>Mar</span>
                    <span>Avr</span>
                    <span>Mai</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-bottom">
                  <h5 className="card-title mb-0">Activité récente</h5>
                </div>
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    <a
                      href="#!"
                      className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                    >
                      <span>
                        <i className="bi bi-calendar-check me-2 text-success"></i>
                        Nouvelle réservation
                      </span>
                      <small className="text-muted">Maintenant</small>
                    </a>
                    <a
                      href="#!"
                      className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                    >
                      <span>
                        <i className="bi bi-building me-2 text-primary"></i>
                        Nouvelle guesthouse
                      </span>
                      <small className="text-muted">2h</small>
                    </a>
                    <a
                      href="#!"
                      className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                    >
                      <span>
                        <i className="bi bi-star me-2 text-warning"></i>
                        Nouvel avis
                      </span>
                      <small className="text-muted">4h</small>
                    </a>
                    <a
                      href="#!"
                      className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                    >
                      <span>
                        <i className="bi bi-person me-2 text-info"></i>
                        Nouveau client
                      </span>
                      <small className="text-muted">1j</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Guesthouses récentes</h5>
                  <a href="/guesthouse" className="btn btn-sm btn-outline-primary">
                    Voir tout
                  </a>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Nom</th>
                        <th>Statut</th>
                        <th>Revenu</th>
                        <th>Clients</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-500">Residence Awoba</td>
                        <td>
                          <span className="badge bg-success">Actif</span>
                        </td>
                        <td>450,000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td className="fw-500">Hôtel de la Plage</td>
                        <td>
                          <span className="badge bg-success">Actif</span>
                        </td>
                        <td>320,000</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td className="fw-500">Palais d&apos;Abomey</td>
                        <td>
                          <span className="badge bg-success">Actif</span>
                        </td>
                        <td>280,000</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td className="fw-500">Le Relais de Parakou</td>
                        <td>
                          <span className="badge bg-secondary">Inactif</span>
                        </td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Réservations récentes</h5>
                  <a href="#!" className="btn btn-sm btn-outline-primary">
                    Voir tout
                  </a>
                </div>
                <div className="table-responsive">
                  <table className="table table-sm table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Client</th>
                        <th>Guesthouse</th>
                        <th>Date</th>
                        <th>Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-500">Jean Dupont</td>
                        <td>Residence Awoba</td>
                        <td>2024-03-15</td>
                        <td>
                          <span className="badge bg-success">Confirmée</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-500">Marie Martin</td>
                        <td>Hôtel de la Plage</td>
                        <td>2024-03-16</td>
                        <td>
                          <span className="badge bg-warning">En attente</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-500">Pierre Bernard</td>
                        <td>Palais d&apos;Abomey</td>
                        <td>2024-03-17</td>
                        <td>
                          <span className="badge bg-success">Confirmée</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-500">Anne Leclerc</td>
                        <td>Residence Awoba</td>
                        <td>2024-03-18</td>
                        <td>
                          <span className="badge bg-success">Confirmée</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


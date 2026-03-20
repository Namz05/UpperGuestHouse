import React from "react";
import Sidebar from "../components/sidebar.jsx";

function Profile() {
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
        <div className="p-4 bg-white border-bottom">
          <h1 className="h2 mb-0">Profil</h1>
        </div>

        <div className="p-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h4 mb-4">Modifier le Profil</h2>

                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      Prénom
                    </label>
                    <input id="firstName" type="text" className="form-control" defaultValue="" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Nom
                    </label>
                    <input id="lastName" type="text" className="form-control" defaultValue="" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input id="email" type="email" className="form-control" defaultValue="" disabled />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Téléphone
                    </label>
                    <input id="phone" type="tel" className="form-control" defaultValue="" />
                  </div>

                  <button type="button" className="btn btn-primary" disabled>
                    Enregistrer
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;


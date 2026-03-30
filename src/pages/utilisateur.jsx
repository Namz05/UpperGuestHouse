import React, { useState } from "react";
import Sidebar from "../components/sidebar.jsx";

function Utilisateur() {
  const defaultAdmins = [
    {
      nomComplet: "Root Super Admin",
      email: "superadmin@upperguesthouse.com",
      role: "Super Admin",
      statut: "Actif",
    },
    {
      nomComplet: "Marie K. Admin",
      email: "marie.admin@upperguesthouse.com",
      role: "Admin",
      statut: "Actif",
    },
  ];

  const savedAdmins = localStorage.getItem("admins");
  const initialAdmins = savedAdmins ? JSON.parse(savedAdmins) : defaultAdmins;
  if (!savedAdmins) {
    localStorage.setItem("admins", JSON.stringify(defaultAdmins));
  }

  const [admins, setAdmins] = useState(initialAdmins);
  const [formData, setFormData] = useState({
    nomComplet: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleCreateAdmin = (event) => {
    event.preventDefault();

    const newAdmin = {
      nomComplet: formData.nomComplet.trim(),
      email: formData.email.trim(),
      role: "Admin",
      statut: "Actif",
    };

    const updatedAdmins = [...admins, newAdmin];
    setAdmins(updatedAdmins);
    localStorage.setItem("admins", JSON.stringify(updatedAdmins));

    setFormData({
      nomComplet: "",
      email: "",
    });
  };

  const handleToggleRole = (indexToUpdate) => {
    const updatedAdmins = admins.map((admin, index) => {
      if (index !== indexToUpdate) {
        return admin;
      }

      return {
        ...admin,
        role: admin.role === "Super Admin" ? "Admin" : "Super Admin",
      };
    });

    setAdmins(updatedAdmins);
    localStorage.setItem("admins", JSON.stringify(updatedAdmins));
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
          <h1 className="h2 mb-2">Utilisateurs</h1>
          <p className="text-muted mb-0">
            Le super admin peut creer un nouvel admin et changer son role.
          </p>
        </div>

        <div className="p-4 border-bottom bg-light">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5 mb-3">Creer un nouvel Admin</h2>
              <form onSubmit={handleCreateAdmin}>
                <div className="row g-3">
                  <div className="col-md-5">
                    <label htmlFor="nomComplet" className="form-label">
                      Nom complet
                    </label>
                    <input
                      id="nomComplet"
                      name="nomComplet"
                      type="text"
                      className="form-control"
                      value={formData.nomComplet}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-2 d-flex align-items-end">
                    <button type="submit" className="btn btn-primary w-100">
                      Creer Admin
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>NOM COMPLET</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>STATUT</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin, index) => (
                  <tr key={index}>
                    <td>{admin.nomComplet}</td>
                    <td>{admin.email}</td>
                    <td>
                      <span className={`badge ${admin.role === "Super Admin" ? "bg-warning text-dark" : "bg-info"}`}>
                        {admin.role}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${admin.statut === "Actif" ? "bg-success" : "bg-secondary"}`}>
                        {admin.statut}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleToggleRole(index)}
                      >
                        {admin.role === "Super Admin" ? "Passer Admin" : "Passer Super Admin"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilisateur;


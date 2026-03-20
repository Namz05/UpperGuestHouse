import React from "react";
import Sidebar from "../components/sidebar.jsx";

function Utilisateur() {
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
          <h1 className="h2 mb-0">Utilisateur</h1>
        </div>

      </div>
    </div>
  );
}

export default Utilisateur;


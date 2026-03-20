import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      "Veuillez ecrire superadmin@gmail.com comme email et 12345678 comme mot de passe";
    setError(msg);
    alert(msg);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card shadow-lg login-card">
          <div className="card-body p-5">
            <div className="text-center mb-4">
              <i className="bi bi-house-door" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
              <h1 className="h2 mt-3 fw-bold">UpperGuestHouse</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="floatingInput">
                  <i className="bi bi-envelope me-2"></i>
                  Email
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword">
                  <i className="bi bi-lock me-2"></i>
                  Mot de passe
                </label>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <div className="form-check text-start mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="remember-me"
                  id="checkDefault"
                />
                <label className="form-check-label" htmlFor="checkDefault">
                  Souviens-toi de moi
                </label>
              </div>

              <button className="btn btn-primary w-100 py-2 fw-bold" type="submit">
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Se connecter
              </button>
            </form>

            <hr className="my-4" />

            <p className="text-center text-body-secondary small"> 2026 UpperGuestHouse. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
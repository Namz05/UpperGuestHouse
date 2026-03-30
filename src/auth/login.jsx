import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VALID_EMAIL = "superadmin@gmail.com";
const VALID_PASSWORD = "12345678";

function Login() {
  //(useState) sont uiliser pour stocker les valeurs des champs de saisie et les messages d'erreur
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();// ceci empeche le rechargement de la page lors de la soumission du formulaire
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      navigate("/dashboard");
    } else {
      setError("Email ou mot de passe incorrect.");
    }
  };

 
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-lg border-0 rounded-4 w-100" style={{ maxWidth: "440px" }}>
        <div className="card-body p-5">


          <div className="text-center mb-4">
            <i className="bi bi-house-door fs-1 text-primary"></i>
            <h1 className="h3 mt-2 fw-bold text-dark">UpperGuestHouse</h1>
            <p className="text-muted small">Connectez-vous à votre espace</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-floating mb-3">
              <input
                type="email" //pour valider la syntaxe de l'email
                className="form-control rounded-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)} //onChange est utilisé pour mettre à jour l'état email et du passwd a chauqe saisie
              />
              <label htmlFor="floatingInput">
                <i className="bi bi-envelope me-2"></i>Email
              </label>
            </div>


            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control rounded-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">
                <i className="bi bi-lock me-2"></i>Mot de passe
              </label>
            </div>


            {/* <div className="d-flex justify-content-between align-items-center mb-4">
              <button
                type="button"
                className="btn btn-link p-0 text-decoration-none small"
                onClick={handleForgotPassword}
              >
                Mot de passe oublié ?
              </button>
            </div> */}


            <button className="btn btn-primary w-100 py-2 fw-bold rounded-3" type="submit">
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Se connecter
            </button>

          </form>

          <hr className="my-4" />
          <p className="text-center text-muted small mb-0">
            © 2026 UpperGuestHouse. Tous droits réservés.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
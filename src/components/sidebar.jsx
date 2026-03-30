import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white border-end"
      style={{ width: "280px", height: "100vh", position: "fixed", left: 0, top: 0 }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-4">Management HQ</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : 'link-dark'}`}>
            <i className="bi bi-house-door me-2"></i>
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/guesthouse" className={`nav-link ${location.pathname === '/guesthouse' ? 'active' : 'link-dark'}`}>
            <i className="bi bi-building me-2"></i>
            Guesthouses
          </Link>
        </li>

        <li>
          <Link
            to="/utilisateur"
            className={`nav-link ${location.pathname === '/utilisateur' ? 'active' : 'link-dark'}`}
          >
            <i className="bi bi-person me-2"></i>
            Utilisateur
          </Link>
        </li>

      </ul>

      <hr />

      <Link
        to="/profile"
        className="d-flex align-items-center link-dark text-decoration-none"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong>Profil</strong>
      </Link>
    </div>
  );
}

export default Sidebar;
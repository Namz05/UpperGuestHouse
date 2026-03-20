import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/login.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Guesthouse from "./pages/guesthouse.jsx";
import Profile from "./pages/profile.jsx";
import Utilisateur from "./pages/utilisateur.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guesthouse" element={<Guesthouse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/utilisateur" element={<Utilisateur />} />

      </Routes>
    </Router>
  );
}

export default App;
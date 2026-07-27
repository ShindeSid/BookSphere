import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">

        <Link to="/" className="logo">
          <FaBookOpen className="logo-icon" />
          <span>BookSphere</span>
        </Link>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          <li>
            <Link to="/catalogue" onClick={() => setMenuOpen(false)}>Catalogue</Link>
          </li>

          <li>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          </li>

          <li>
            <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          </li>
        </ul>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
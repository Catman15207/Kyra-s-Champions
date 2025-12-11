import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo / brand */}
      <div className="logo">
        <HashLink smooth to="/">
          Kyra's Champions
        </HashLink>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? "mobile-nav active" : ""}`}>
        <li>
          <HashLink smooth to="/">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/about">
            About Organization
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/kyrasstory">
            Kyra's Story
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/contact">
            Contact Us
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

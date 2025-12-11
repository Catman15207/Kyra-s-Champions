import "./styles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import KyrasStory from "./pages/kyrasstory"; // match filename
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <BrowserRouter>
      {/* === GLOBAL HEADER === */}
      <header className="header">
        {/* Logo LEFT */}
        <img
          className="logo"
          src="/images/Kyra's_logo.png"
          alt="Kyra's Champions Logo"
        />

        {/* Desktop Navigation RIGHT */}
        <div className="desktop-nav">
          <Navigation />
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={toggleMenu}>
          =
        </button>
      </header>

      {/* === MOBILE DROPDOWN MENU === */}
      {menuOpen && (
        <div className="mobile-menu">
          <Navigation isMobile={true} />
        </div>
      )}

      {/* === PAGE CONTENT === */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kyrasstory" element={<KyrasStory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

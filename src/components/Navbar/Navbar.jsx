import { useState } from 'react';
import { NavLink } from "react-router";
import { navLinks } from '../Data/Data';
import './Navbar.css';
import logo from '/assets/img/WTM_Logo_White.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img src={logo} alt="Women Techmakers" />
      </NavLink>

      <button
        className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        id="navbar-links"
        className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}
        role="list"
      >
        {navLinks.map((link) => (
          <li key={link.path} >
            <NavLink to={link.path} className={({isActive})=> isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

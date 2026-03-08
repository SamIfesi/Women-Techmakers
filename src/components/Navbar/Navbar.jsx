import { useState } from 'react';
import { navLinks } from '../Data/Data';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <img src="/assets/img/WTM_Logo_White.png" alt="Women Techmakers" />
      </a>

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
          <li key={link.path}>
            <a href={link.path} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

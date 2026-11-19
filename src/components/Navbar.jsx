import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';

function NavBar() {
  return (
    <header className="navbar">

      {/* Website logo / brand */}
      <Link to="/" className="navbar-logo">
        Sweet <span>Cravings</span>
      </Link>

      {/* Main navigation links */}
      <nav className="navbar-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Recipes
        </NavLink>

        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Favourites
        </NavLink>

      </nav>
    </header>
  );
}

export default NavBar;
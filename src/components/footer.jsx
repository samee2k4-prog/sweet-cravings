import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Website name and description */}
        <div className="footer-brand">
          <h2>Sweet Cravings</h2>
          <p>
            Discover delicious dessert recipes and save
            your favourite sweet treats.
          </p>
        </div>

        {/* Footer navigation */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/favourites">Favourites</Link>
        </div>

      </div>

      {/* Copyright information */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sweet Cravings.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
const Menu = () => {
  return (
    <div className="navbar" id="EasterEgg">
      <div className="menu-container">
        <header>
          <h1>Jana Johansson</h1>
        </header>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active">
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              Om mig
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv" className="nav-link" activeClassName="active">
              CV
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="nav-link"
              activeClassName="active"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;

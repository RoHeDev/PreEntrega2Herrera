import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Terere
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Mates">
                Mates
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Tazas">
                Tazas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Vasos">
                Vasos
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

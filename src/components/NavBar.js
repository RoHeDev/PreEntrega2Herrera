import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
      <div className="container">
        <a className="navbar-brand" href="/">
          Terere
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Mates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Tazas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Vasos
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

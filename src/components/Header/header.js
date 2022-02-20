import React from "react";

import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
        <div class="navbar-brand">
          <img src={logo} alt="logo" className="Logo" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="nav-link active" aria-current="page">
                Browse
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;

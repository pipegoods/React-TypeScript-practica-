import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Musica Tocayos - Discord
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
              <li className="nav-item">
                <Link className="nav-link" to="/new-video">
                  Agrega canción
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <button type="button" className="btn btn-primary d-sm-none">
        <Link style={{color: '#fff', textDecoration: 'none'}} to="/new-video">
          Agrega canción
        </Link>
      </button>
    </div>
  );
};

export default Navbar;

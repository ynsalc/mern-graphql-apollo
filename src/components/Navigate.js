import React from "react";
import { Link } from "react-router-dom";

export default function Navigate() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Blog V1
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Add Article
                  </Link>
                </li>
              </ul>
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

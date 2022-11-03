import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            VoteCoin
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard">
                  dashboard
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard">
                  metamask
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard">
                  campaigns
                </NavLink>
              </li> 
              <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard">
                  white paper
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

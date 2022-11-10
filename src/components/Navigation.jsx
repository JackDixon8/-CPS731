import React from "react";
import { NavLink } from "react-router-dom";
import Basic from "./OrderDetails";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            ReX
          </NavLink>
          <Basic></Basic>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

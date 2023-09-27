import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavApp.scss";
function navApp() {
  return (
    <nav>
      <ul className="ul-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Usuarios</Link>
        </li>
      </ul>
    </nav>
  );
}

export default navApp;

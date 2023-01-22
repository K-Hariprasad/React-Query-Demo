import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employee">Employee</Link>
        </li>
        <li>
          <Link to="/rq-employee">RQ-Employee</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

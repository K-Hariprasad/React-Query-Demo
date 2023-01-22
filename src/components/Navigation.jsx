import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-bar">
      <span> R & M</span>
      <ul>
        <li>
          <Link to="/">Notes</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

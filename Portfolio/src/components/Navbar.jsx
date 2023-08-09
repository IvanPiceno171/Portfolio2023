import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ol id="nav-ol">
          <li className="nav-li">
            <a href="#">Home</a>
          </li>
          <li className="nav-li">
            <a href="#">About</a>
          </li>
          <li className="nav-li">
            <a href="#">Projects</a>
          </li>
          <li className="nav-li">
            <a href="#">Skills</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

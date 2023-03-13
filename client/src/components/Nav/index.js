import React from "react";

export default function Nav() {

  return (
      <nav className="navbar navbar-expand-lg nav-hide">
        <div className="nav-links mx-3">
          <ul className="navbar-nav d-mob-none">
            <li className="nav-item mx-2 width-max">
              <a href="/">HOME</a>
            </li>
            <li className="nav-item mx-2 width-max">
              <a href="/browse">BROWSE</a>
            </li>
          </ul>
        </div>
      </nav>
  );
};
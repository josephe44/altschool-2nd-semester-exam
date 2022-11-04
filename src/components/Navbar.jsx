import React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBug, FaUser, FaAtom, FaHome } from "react-icons/fa";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const location = useLocation();
  const handleNavOpen = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className={navOpen ? "nav open" : "nav close"}>
      <header onClick={handleNavOpen}>
        <FaAtom />
      </header>
      <ul>
        <li className={location.pathname === "/" ? "link-hover" : "none"}>
          <NavLink to="/">
            <span className="icon">
              <FaHome />
            </span>
            <span className="path">User</span>
          </NavLink>
        </li>
        <li
          className={location.pathname === "/repo-list" ? "link-hover" : "none"}
        >
          <NavLink to="/repo-list">
            <span className="icon">
              <FaUser />
            </span>
            <span className="path">Repos</span>
          </NavLink>
        </li>
        <li
          className={
            location.pathname === "/error-boundary-page" ? "link-hover" : "none"
          }
        >
          <NavLink to="/error-boundary-page">
            <span className="icon">
              <FaBug />
            </span>
            <span className="path">Error</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

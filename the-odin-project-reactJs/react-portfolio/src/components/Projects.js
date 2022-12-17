import React from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <div className="projects">
      <div class="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          class="search-input"
        />
        <a href="#" class="search-btn">
          <i class="fas fa-search"></i>
        </a>
      </div>
      <nav className="nav-bar-projects">
        <h1>Projects</h1>
        <NavLink style={navLinkStyles} to={"/projects/mostproud"}>
          Most Proud
        </NavLink>
        <NavLink style={navLinkStyles} to={"/projects/html"}>
          Html
        </NavLink>
        <NavLink style={navLinkStyles} to={"/projects/css"}>
          Css
        </NavLink>
        <NavLink style={navLinkStyles} to={"/projects/javascript"}>
          Javascript
        </NavLink>
        <NavLink style={navLinkStyles} to={"/projects/react"}>
          React
        </NavLink>
        <NavLink style={navLinkStyles} to={"/projects/"}>
          All
        </NavLink>
      </nav>
    </div>
  );
}

export default Projects;

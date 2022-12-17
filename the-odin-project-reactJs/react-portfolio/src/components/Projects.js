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
      <div>
        <input type="search" placeholder="Search products.." />
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
      </nav>
    </div>
  );
}

export default Projects;

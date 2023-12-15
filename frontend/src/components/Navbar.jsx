import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../style/NavStyle.css";

// Navbar component responsible for rendering the navigation bar.
const Navbar = () => {
  // Log a message when the Navbar component is rendered.
  console.log("Navbar rendered");

  return (
    <nav className="nav">
      {/* Link to the home page with a site title */}
      <Link to="/HomePage" className="site-title">
        Name of Page
      </Link>
      <ul>
        {/* CustomLink components for navigation to ContactPage and AboutPage */}
        <CustomLink to="/ContactPage">Contact us</CustomLink>
        <CustomLink to="/AboutPage">About us</CustomLink>
      </ul>
    </nav>
  );
};

// CustomLink component for rendering navigation links with active state
function CustomLink({ to, children, ...props }) {
  // Resolve the path using the useResolvedPath hook
  const resolvedPath = useResolvedPath(to);
  
  // Check if the current route matches the resolved path using useMatch
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  // Render a list item with an active class based on the isActive state
  return (
    <li className={isActive ? "active" : ""}>
      {/* Render a Link component for navigation */}
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

// Export the Navbar component as the default export
export default Navbar;

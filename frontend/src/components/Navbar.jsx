import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/NavStyle.css";

// Navbar component responsible for rendering the navigation bar.
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header >
      <img src="src/assets/Airplane.png" alt="logo" className="logo" />
      <nav ref={navRef}>
        <Link to="/HomePage" onClick={showNavbar}>Home Page</Link>
        <Link to="/ContactPage" onClick={showNavbar}>Contact us</Link>
        <Link to="/AboutPage" onClick={showNavbar}>About us</Link>
        <Link to="/saved-images" onClick={showNavbar}>Gallery</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/NavStyle.css";

// Navbar component responsible for rendering the navigation bar.
function Navbar() {
  const navRef = useRef();

  const playButtonSound = () => {
    const audio = new Audio("src/assets/sounds/Pop.mp3");
    audio.play();
  };

  const playBoopSound = () => {
    const audio = new Audio("src/assets/sounds/Boop.mp3");
    audio.play();
  };

  const playCoinSound = () => {
    const audio = new Audio("src/assets/sounds/Coin.mp3");
    audio.play();
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src="src/assets/Airplane.png" alt="logo" className="logo" />
      <nav ref={navRef}>
        <Link
          to="/HomePage"
          onClick={() => {
            showNavbar();
            playButtonSound();
          }}
        >
          Home Page
        </Link>
        <Link
          to="/ContactPage"
          onClick={() => {
            showNavbar();
            playButtonSound();
          }}
        >
          Contact us
        </Link>
        <Link
          to="/AboutPage"
          onClick={() => {
            showNavbar();
            playButtonSound();
          }}
        >
          About us
        </Link>
        <Link
          to="/saved-images"
          onClick={() => {
            showNavbar();
            playButtonSound();
          }}
        >
          Gallery
        </Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={() => {
            showNavbar();
            playBoopSound();
          }}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={() => {
          showNavbar();
          playCoinSound();
        }}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

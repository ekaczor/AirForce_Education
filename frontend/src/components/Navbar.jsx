import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/NavStyle.css";

// Navbar component responsible for rendering the navigation bar.
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header style={{zIndex:'1'}}>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<Link to="/HomePage">Home Page</Link>
				<Link to="/ContactPage">Contact us</Link>
				<Link to="/AboutPage">About us</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;

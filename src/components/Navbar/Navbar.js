import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Button from "../Button/Button";
import Logo from "../../assets/Group 114.png";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="logo" />
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/services" className="services">
            <li>Services</li>
          </Link>
          <Link to="/pricing" className="pricing">
            <li>Pricing</li>
          </Link>
          <Link to="/about" className="about">
            <li>About</li>
          </Link>
          <li>
            <Button size="lg" color="primary" content="Start a Company" />
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;

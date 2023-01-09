import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/" exact className="home" activeClassName="selected">
            <li className="nav-items">Home</li>
          </NavLink>
          <NavLink
            to="/services"
            className="services"
            activeClassName="selected"
          >
            <li className="nav-items">Services</li>
          </NavLink>
          <NavLink to="/pricing" className="pricing" activeClassName="selected">
            <li className="nav-items">Pricing</li>
          </NavLink>
          <NavLink to="/about" className="about" activeClassName="selected">
            <li className="nav-items">About</li>
          </NavLink>
          <li className="nav-items">
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

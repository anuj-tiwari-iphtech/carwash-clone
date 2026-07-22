import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/car-wash-logo-2.png";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

import "../Css/navbar.css"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="nav-menu-wrapper">
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <NavLink to="/home" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    </li>

                    <li className={`dropdown ${dropdownOpen ? "dropdown-active" : ""}`}>
                        <a 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                setDropdownOpen(!dropdownOpen);
                            }}
                        >
                            Pages <FaChevronDown className="arrow" />
                        </a> 
                        
                        <ul className="dropdown-menu">
                            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
                            <li><NavLink to="/team" onClick={() => setMenuOpen(false)}>Our Team</NavLink></li>
                            <li><NavLink to="/faq" onClick={() => setMenuOpen(false)}>FAQ</NavLink></li>
                            <li><NavLink to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</NavLink></li>
                            <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
                        </ul>
                    </li>

                    <li>
                        <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
                    </li>
                </ul>
                </div>

               
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>

            
            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
        </header>
    );
}

export default Navbar;
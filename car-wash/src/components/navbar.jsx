import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/car-wash-logo-2.png";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

import "../Css/navbar.css"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false)
        setDropdownOpen(false)
    }

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="nav-menu-wrapper">
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <NavLink to="/home" onClick={closeMenu}>Home</NavLink>
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
                            <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
                            <li><NavLink to="/team" onClick={closeMenu}>Our Team</NavLink></li>
                            <li><NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink></li>
                            <li><NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink></li>
                            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
                        </ul>
                    </li>

                    <li>
                        <NavLink to="/contact-us" onClick={closeMenu}>Contact Us</NavLink>
                    </li>
                </ul>
                </div>

               
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>

            
            {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </header>
    );
}

export default Navbar;
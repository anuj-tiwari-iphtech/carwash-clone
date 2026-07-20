import { useState } from "react";
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
                        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
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
                            <li><a href="/" onClick={() => setMenuOpen(false)}>About Us</a></li>
                            <li><a href="/" onClick={() => setMenuOpen(false)}>Our Team</a></li>
                            <li><a href="/" onClick={() => setMenuOpen(false)}>FAQ</a></li>
                            <li><a href="/" onClick={() => setMenuOpen(false)}>Pricing</a></li>
                            <li><a href="/" onClick={() => setMenuOpen(false)}>Services</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" onClick={() => setMenuOpen(false)}>Contact Us</a>
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
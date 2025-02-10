import React, {useEffect, useRef, useState,forwardRef} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";
import Logo from "./Logo";

const Navbar = forwardRef(({openLoginModal, setSelectedLocation, citySearchRef},ref) =>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isBrowseOpen,setIsBrowseOpen] = useState(false);

    const toggleBrowse = () =>{
        setIsBrowseOpen((prev)=>!prev);
    }

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevState)=>!prevState);
    };

    const handleHomeClick = () => {
        navigate(`/`);
        setIsMobileMenuOpen(false);
    };

    const handleClick = () =>{
        openLoginModal();
        handleHomeClick();
    }

    const navigate = useNavigate();
    const handleLocationClick = (location) => {
        setSelectedLocation(location);
        navigate(`/`);
        setTimeout(() => {
            citySearchRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 200);
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };
    useEffect(() =>{
        const handleClickOutside = (event) =>{
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown",handleClickOutside);
        return () => {
            document.removeEventListener("mousedown",handleClickOutside);
        };
    }, []);

    return(
        <header className="navbar" ref = {ref}>
            <div className="navbar-container">
                <div className="navbar-left">
                    <button className="menu-toggle" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? "✖" : "☰"}
                    </button>
                    <div className="navbar-logo">
                    <Logo />
                    </div>
                    <div className="navbar-options">
                    <ul>
                        <li className="dropdown" ref={dropdownRef}>
                            <button className="dropdown-button" onClick={toggleDropdown}>
                                Browse
                                <span className="arrow">▼</span>
                            </button>
                            {isDropdownOpen&& (
                                <ul className="dropdown-menu">
                                    <li onClick={() => handleLocationClick("Hyderabad")}>Hyderabad</li>
                                    <li onClick={() => handleLocationClick("Bengaluru")}>Bengaluru</li>
                                    <li onClick={() => handleLocationClick("Vijayawada")}>Vijayawada</li>
                                    <li onClick={() => handleLocationClick("Guwahati")}>Guwahati</li>
                                    <li onClick={() => handleLocationClick("Ahmedabad")}>Ahmedabad</li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#help">Help</a></li>
                        <li><a href="#propertyManagers">For Property Managers</a></li>
                    </ul>
                    </div>
                </div>
                

                <div className="navbar-actions">
                    <button className="login-button"  onClick={openLoginModal}>Register/Login</button>
                    <button className="download-button">Download</button>
                </div>
            </div>
            {isMobileMenuOpen && (
        <div className={`mobile-menu ${isMobileMenuOpen ? "" : "mobile-menu-hidden"}`}>
            
          <ul>
            <li onClick={handleHomeClick}>Home</li>
            <li>
                <button className="collapsible" onClick={toggleBrowse}>
                    {isBrowseOpen ? "▼" : "►"} Browse
                </button>
              {isBrowseOpen && (
                <ul className="collapsible-content">
                    <li onClick={() => handleLocationClick("Hyderabad")}>Hyderabad</li>
                    <li onClick={() => handleLocationClick("Bengaluru")}>Bengaluru</li>
                    <li onClick={() => handleLocationClick("Vijayawada")}>Vijayawada</li>
                    <li onClick={() => handleLocationClick("Guwahati")}>Guwahati</li>
                    <li onClick={() => handleLocationClick("Ahmedabad")}>Ahmedabad</li>
                </ul>
              )}
            </li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#help">Help</a></li>
            <li><a href="#propertyManagers">For Property Managers</a></li>
            <li><button className="login" onClick={handleClick}>Register/Login</button></li>
          </ul>
        </div>
      )}
    </header>
  );
});

export default Navbar;
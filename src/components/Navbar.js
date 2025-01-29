import React, {useEffect, useRef, useState,forwardRef} from "react";
import "./../styles/Navbar.css";
import Logo from "./Logo";

const Navbar = forwardRef(({openLoginModal},ref) =>{
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
                        &#9776;
                    </button>
                    <div className="navbar-logo">
                    <Logo />
                    </div>
                    <div className="navbar-options">
                    <ul>
                        <li className="dropdown" ref={dropdownRef}>
                            <a href="#browse" onClick={toggleDropdown}>
                                Browse
                                <span className="arrow">▼</span>
                            </a>
                            {isDropdownOpen&& (
                                <ul className="dropdown-menu">
                                    <li><a href="hyderabad">Hyderabad</a></li>
                                    <li><a href="bangalore">Bangalore</a></li>
                                    <li><a href="vijayawada">Vijayawada</a></li>
                                    <li><a href="guwahati">Guwahati</a></li>
                                    <li><a href="ahmedabad">Ahmedabad</a></li>
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
                    <button onClick={openLoginModal}>Register/Login</button>
                    <button className="download-button">Download</button>
                </div>
            </div>
            {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#home" onClick={handleHomeClick}>Home</a></li> {/* Close menu when clicked */}
            <li>
                <button className="collapsible" onClick={toggleBrowse}>
                    {isBrowseOpen ? "▼" : "►"} Browse
                </button>
              {isBrowseOpen && (
                <ul className="collapsible-content">
                  <li><a href="hyderabad">Hyderabad</a></li>
                  <li><a href="bangalore">Bangalore</a></li>
                  <li><a href="vijayawada">Vijayawada</a></li>
                  <li><a href="guwahati">Guwahati</a></li>
                  <li><a href="ahmedabad">Ahmedabad</a></li>
                </ul>
              )}
            </li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#help">Help</a></li>
            <li><a href="#propertyManagers">For Property Managers</a></li>
          </ul>
        </div>
      )}
    </header>
  );
});

export default Navbar;
import React, {useEffect, useRef, useState} from "react";
import "./../styles/Navbar.css";
import Logo from "./Logo";

function Navbar ({openLoginModal}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
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
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <Logo />
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
                    <button className="download-button">Download the App</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
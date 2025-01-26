import React from "react";
import "./../styles/Navbar.css";

function Navbar ({openLoginModal}) {
    return(
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo">SuperNest</div>
                <nav>
                    <ul>
                        <li><a href="#browse">browse</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#help">Help</a></li>
                        <li><a href="#propertyManagers">For Property Managers</a></li>
                    </ul>
                </nav>
                <div className="navbar-actions">
                    <button onClick={openLoginModal}>Register/Login</button>
                    <button className="download-button">Download the App</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
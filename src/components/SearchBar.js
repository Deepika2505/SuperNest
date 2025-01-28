import React from "react";
import "./../styles/SearchBar.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const handleClick = () => {
    console.log("Search button clicked, redirect!!");
  }
  return (
    <div className="search-bar-container">
      <div className="search-bar-header">
        <span>Trusted by 12000+ tenants</span>
        <span>Supported by Microsoft for Startups</span>
      </div>
      <div className="search-bar">
        <select className="location-dropdown">
          <option value="location">Select Location</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="bengaluru">Bengaluru</option>
          <option value="vijayawada">Vijayawada</option>
          <option value="guwahati">Guwahati</option>
          <option value="ahmedabad">Ahmedabad</option>
        </select>
        <input
          type="text"
          className="search-input"
          placeholder="Search properties or localities..."
        />
        <button className="search-button" onClick={handleClick}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

import React, {useState} from "react";
import "./../styles/SearchBar.css";
import { FiSearch } from "react-icons/fi";



const SearchBar = ({selectedLocation,setSelectedLocation,searchQuery,setSearchQuery}) => {
  
  const handleClick = () => {
    console.log("Search button clicked, redirect!!");
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar-class">
    <div className="search-bar-top">
        <select 
          className="search-bar-dropdown"
          value={selectedLocation}
          onChange={handleLocationChange}>
          <option value="">Select Location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Vijayawada">Vijayawada</option>
          <option value="Guwahati">Guwahati</option>
          <option value="Ahmedabad">Ahmedabad</option>
        </select>
      </div>
    <div className="search-bar-container">
      <div className="search-bar-header">
        <span>Trusted by 12000+ tenants</span>
        <span className="text1">Supported by Microsoft for Startups</span>
      </div>
      <div className="search-bar">
        <select 
          className="location-dropdown" 
          value={selectedLocation}
          onChange={handleLocationChange}>
          <option value="">Select Location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Vijayawada">Vijayawada</option>
          <option value="Guwahati">Guwahati</option>
          <option value="Ahmedabad">Ahmedabad</option>
        </select>
        <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          value={searchQuery}
          placeholder="Search properties or localities..."
          onChange={handleSearchInputChange}
        />
        <button className="search-button" onClick={handleClick}>
          <FiSearch />
        </button>
        </div>
      </div>
      <div className="search-bar-header">
        <span className="text2">Supported by Microsoft for Startups</span>
      </div>
    </div>
    </div>
  );
};

export default SearchBar;

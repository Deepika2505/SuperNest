import React, { useState } from "react";
import "./../styles/RecentlyAdded.css";
import PropertyCard from "./PropertyCard";

const RecentlyAdded = ({properties}) => {

  return (
    <div className="recently-added">
      <div className="recently-added-header">
        <h2 className="recently-added-title">Recently Added</h2>
        <div className="recently-added-subtext">
          <span>Looking to optimise your property's operations? </span>
          <span><a href="#join" className="join-link">Join SuperNest</a> at less than Rs. 1/month</span>
        </div>
      </div>
        <div className="recently-added-layout">
      <div id="recently-added-container" className="property-cards-container">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default RecentlyAdded;

import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

export default ({ businesses }) => (
  <div className="BusinessList">
    {businesses
      ? businesses.map(business => {
          return <Business business={business} key={business.id} />;
        })
      : "No results found. Please enter a business and a location."}
  </div>
);

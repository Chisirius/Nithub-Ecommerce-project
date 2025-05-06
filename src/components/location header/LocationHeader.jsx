import "./locationHeader.css";

import React from "react";

function LocationHeader() {
  return (
    <div className="locationHeader">
      <div>
        <span>
          <select>
            <option>English</option>
            <option>Chinese</option>
            <option>French</option>
            <option>Spanish</option>
            <option>italian</option>
          </select>
        </span>

        <span>
          <select>
            <option>USD </option>
            <option>EUR</option>
            <option>NAIRA</option>
          </select>
        </span>
      </div>
      <p>Free shipping Over $300.00</p>
      <p>PROFILE</p>
    </div>
  );
}

export default LocationHeader;

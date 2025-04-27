import React from "react";
import "./offers.css";

function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on best sellers products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src="/offers.jpeg" alt="best sellers" />
      </div>
    </div>
  );
}

export default Offers;

import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="head">
      <div className="logo">
        <h1>superGreen</h1>
      </div>
      <div className="search-container">
        <div className="search-boxx">
          <input
            type="text"
            placeholder="Search in here"
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <button className="search-buttonn">+</button>
      </div>
      <div className="utilities">
       
        <div className="account">
       <NavLink
          to="/signup"
          className={({ isActive }) =>
          isActive ? "signup-button active" : "signup-button"
       }>
           <h4> <i className="fa-regular fa-user fa-lg"></i> Sign up </h4>
        </NavLink>
        </div>

        <div className="account">
          <i className="fa-regular fa-circle-question fa-lg"></i>
          <h4>Profile</h4>
          <i className="fa-solid fa-angle-down fa-2xs"></i>
        </div>
        
        <div className="account">
       <NavLink
          to="/Cart"
          className={({ isActive }) =>
          isActive ? "signup-button active" : "signup-button"
       }>
           <h4> <i className="fa-solid fa-cart-shopping fa-lg" /> Cart </h4>
        </NavLink>
        </div>
        
      </div>
    </header>
  );
}

export default Navbar;

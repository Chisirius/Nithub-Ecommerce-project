import "./filterBar.css";
import { NavLink } from "react-router-dom";

import React from "react";

function FilterBar() {
  return (
    <div className="filterBar">
      <NavLink to= '/Home'>Home</NavLink>
      <NavLink to= '/Explore'>Explore</NavLink>
      <NavLink to= '/Blog'> Blog</NavLink>
    </div>
  );
}

export default FilterBar;

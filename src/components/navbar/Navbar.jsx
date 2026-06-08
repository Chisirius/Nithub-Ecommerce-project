import "./NavBar.css";
import { NavLink } from "react-router-dom";

import React from "react";

function FilterBar() {
  return (
    <div className="flex bg-emerald-50 p-[5px] justify-center gap-[75px] text-[18px] border-b-[4px] border-b-[#ddd] shadow-md sticky top-16 z-50 ">
      <NavLink to= '/Home'>Home</NavLink>
      <NavLink to= '/Explore'>Explore</NavLink>
    </div>
  );
}

export default FilterBar;

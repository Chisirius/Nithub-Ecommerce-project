import "./filterBar.css";

import React from "react";

function FilterBar() {
  return (
    <div className="filterBar">
      <p>Home</p>
      <p>Explore </p>
      <select>
        <option>Category</option>
        <option>Livestock</option>
        <option>Cereals </option>
        <option>Fruits</option>
        <option>Vegetables</option>
        <option>Roots & Tubers</option>
        <option>Legumes & Pulses</option>
        <option>Plantation Crops</option>
        <option>Apiculture</option>
        <option>Micro Livestock</option>
      </select>

      <select class="product-filter">
        <option value="">Sort by</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>

      <p>BLOG</p>
    </div>
  );
}

export default FilterBar;

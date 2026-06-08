import React from "react";
import categories from "../../features/products/data/allCategories";

function FilterBar({ setCategory, setSortOrder }) {
  return (
    <div>
      {/* Category Filter */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Sort Filter */}
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="relevance">Sort by: Relevance</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
}

export default FilterBar;
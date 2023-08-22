import React from "react";

function CategoryFilter({ categories }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button key={index} className="category-button">
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

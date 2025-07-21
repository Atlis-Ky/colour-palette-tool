import React, { useState } from "react";
import ColourSet from "./ColourSet";
import colourPalettes from "../data/colourPalettes";
import "../styles/ColourPalettes.css";

const ColourPalettes = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get all categories
  const categories = ["all", ...Object.keys(colourPalettes)];

  // Get palettes based on selected category
  const getDisplayPalettes = () => {
    if (selectedCategory === "all") {
      return Object.values(colourPalettes).flat();
    }
    return colourPalettes[selectedCategory] || [];
  };

  const displayPalettes = getDisplayPalettes();

  return (
    <div className="colour-palettes">
      <div className="colour-palettes-header">
        <h2 className="section-heading">
          <span className="highlight-word">Curated</span> Colour Collections
        </h2>
        <p className="section-description">
          
        </p>
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-filter ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="palettes-grid">
        {displayPalettes.map((palette) => (
          <ColourSet key={palette.id} palette={palette} />
        ))}
      </div>
    </div>
  );
};

export default ColourPalettes;

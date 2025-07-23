import { useState } from "react";
import ColourSet from "./ColourSet";
import colourPalettes from "../data/colourPalettes";
import "../styles/ColourPalettes.css";

const ColourPalettes = ({ searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get all categories
  const categories = ["all", ...Object.keys(colourPalettes)];

  // Get palettes based on selected category and search term
  const getDisplayPalettes = () => {
    let palettes = [];

    if (selectedCategory === "all") {
      palettes = Object.values(colourPalettes).flat();
    } else {
      palettes = colourPalettes[selectedCategory] || [];
    }

    // Filter by search term if provided
    if (searchTerm && searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      palettes = palettes.filter((palette) => {
        // Search in palette name
        const nameMatch = palette.name.toLowerCase().includes(searchLower);

        // Search in tags
        const tagMatch = palette.tags.some((tag) =>
          tag.toLowerCase().includes(searchLower)
        );

        return nameMatch || tagMatch;
      });
    }

    return palettes;
  };

  const displayPalettes = getDisplayPalettes();

  return (
    <div className="colour-palettes">
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-filter ${category} ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Show search results info */}
      {searchTerm && searchTerm.trim() !== "" && (
        <div className="search-results-info">
          Found {displayPalettes.length} palette
          {displayPalettes.length !== 1 ? "s" : ""} matching "{searchTerm}"
        </div>
      )}

      <div className="palettes-grid">
        {displayPalettes.length > 0 ? (
          displayPalettes.map((palette) => (
            <ColourSet key={palette.id} palette={palette} />
          ))
        ) : searchTerm && searchTerm.trim() !== "" ? (
          <div className="no-results">
            <p>No palettes found matching "{searchTerm}"</p>
            <p>
              Try searching for colours like "blue", "green", or by theme eg:
              "modern", "vintage".
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ColourPalettes;

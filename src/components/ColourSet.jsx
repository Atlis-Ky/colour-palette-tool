import React from "react";
import ColourCard from "./ColourCard";
import "../styles/ColourSet.css";

const ColourSet = ({ palette }) => {
  return (
    <div className="colour-set">
      <div className="colour-set-header">
        <h3 className="colour-set-name">{palette.name}</h3>
        <div className="colour-set-tags">
          {palette.tags.map((tag, index) => (
            <span key={index} className="colour-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="colour-cards-container">
        {palette.colours.map((colour, index) => (
          <ColourCard
            key={`${palette.id}-${index}`}
            colour={colour}
            index={index}
          />
        ))}
      </div>

      <div className="colour-set-actions">
        <button className="action-button primary">
          <span>Export Palette</span>
        </button>
        <button className="action-button secondary">
          <span>Save Favourite</span>
        </button>
      </div>
    </div>
  );
};

export default ColourSet;

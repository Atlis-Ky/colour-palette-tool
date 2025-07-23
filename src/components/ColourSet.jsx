import { useState } from "react";
import ColourCard from "./ColourCard";
import "../styles/ColourSet.css";

const ColourSet = ({ palette }) => {
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedJSON, setCopiedJSON] = useState(false);

  // Extracts category from palette ID
  const category = palette.id.split("-")[0];

  const copyCSS = async () => {
    const cssContent = `:root {
  --colour-one: ${palette.colours[0]};
  --colour-two: ${palette.colours[1]};
  --colour-three: ${palette.colours[2]};
  --colour-four: ${palette.colours[3]};
  --colour-five: ${palette.colours[4]};
}`;

    try {
      await navigator.clipboard.writeText(cssContent);
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 2000);
    } catch (err) {
      console.log("Failed to copy CSS");
    }
  };

  const copyJSON = async () => {
    const jsonContent = JSON.stringify(
      {
        name: palette.name,
        colours: {
          one: palette.colours[0],
          two: palette.colours[1],
          three: palette.colours[2],
          four: palette.colours[3],
          five: palette.colours[4],
        },
      },
      null,
      2
    );

    try {
      await navigator.clipboard.writeText(jsonContent);
      setCopiedJSON(true);
      setTimeout(() => setCopiedJSON(false), 2000);
    } catch (err) {
      console.log("Failed to copy JSON");
    }
  };

  return (
    <div className={`colour-set ${category}`}>
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
        <button
          className={`action-button primary ${category}`}
          onClick={copyCSS}
        >
          <span>{copiedCSS ? "Copied!" : "Copy CSS"}</span>
        </button>
        <button
          className={`action-button secondary ${category}`}
          onClick={copyJSON}
        >
          {copiedJSON ? "Copied!" : "Copy JSON"}
        </button>
      </div>
    </div>
  );
};

export default ColourSet;

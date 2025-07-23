import { useState } from "react";
import "../styles/ColourCard.css";

const ColourCard = ({ colour, index }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(colour);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.log("Failed to copy colour code");
    }
  };

  return (
    <div
      className="colour-card"
      style={{ backgroundColor: colour }}
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className="colour-overlay">
        <span className="colour-code">{colour}</span>
        {copied && <span className="copied-message">Copied!</span>}
      </div>
    </div>
  );
};

export default ColourCard;

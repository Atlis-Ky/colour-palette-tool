import React from "react";
import "../styles/ContextCard.css";

const ContextCard = () => (
  <div className="context-card">
    <h1 className="context-card-heading">
      <span className="highlight-word">Curated</span> functional colour palettes
    </h1>
    <p className="context-card-text">
      Explore some handpicked colour palettes, each carefully crafted work well as a set. Click any colour to copy its hex code, or click on the buttons to copy the group CSS properties or JSON formats of each palette. Happy Coding!
    </p>
    <p className="context-card-text">
      Feel free to scroll through all palettes, or use any of the category filters below.
    </p>
  </div>
);

export default ContextCard;

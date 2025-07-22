import React from "react";
import "../styles/ContextCard.css";

const ContextCard = () => (
  <div className="context-card">
    <h1 className="context-card-heading">
      <span className="highlight-word">Curated</span> functional colour palettes
    </h1>
    <p className="context-card-text">
      Explore some handpicked colour palettes, each of them sticking to a theme and designed to complement each other in a set. Click any individual colour to copy its hex code to your clipboard. Click on the buttons to copy the group CSS properties or JSON formats of each palette. Happy Coding!
    </p>
    <p className="context-card-text">
      Feel free to scroll through all palettes, Search by tag, or use any of the category filters below.
    </p>
  </div>
);

export default ContextCard;

import React from "react";
import SearchBar from "./SearchBar";
import "../styles/NavBar.css";

const NavBar = ({ onSearch, searchValue }) => (
  <nav className="navbar">
    <div className="navbar-title">
      <span className="highlight-word">COLOUR</span> Palette Tool
    </div>
    <SearchBar onSearch={onSearch} searchValue={searchValue} />
  </nav>
);

export default NavBar;

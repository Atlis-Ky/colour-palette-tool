import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch, searchValue }) => (
  <input
    className="searchbar"
    type="text"
    placeholder="Search eg...."
    value={searchValue}
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
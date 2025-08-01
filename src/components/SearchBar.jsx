import "../styles/SearchBar.css";

const SearchBar = ({ onSearch, searchValue }) => (
  <input
    className="searchbar"
    type="text"
    placeholder="Search eg: blue, warm...."
    value={searchValue}
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
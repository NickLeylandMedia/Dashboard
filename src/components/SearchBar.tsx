/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "../styles/SearchBar.scss";

/* Image Imports */

/* Component Imports */

/* Component/Functions */
const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input type="text" className="searchInput" />
      <button className="searchButton">GO</button>
    </div>
  );
};

/* Export Statement */
export default SearchBar;

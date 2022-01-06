/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import "../styles/SearchBar.scss";

/* Image Imports */

/* Component Imports */

/* Component/Functions */
const SearchBar = () => {
  //State to store search term
  const [searchTerm, setSearch] = useState<string>("");

  //Function to execute search term
  const search = (e: any, term: string) => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${term}`;
  };

  //Effect to focus the input on page load
  useEffect(() => {
    const targ = document.querySelector(".searchInput") as HTMLElement;
    targ.focus();
  }, []);

  return (
    <div className="SearchBar">
      <form action="">
        <input
          type="text"
          className="searchInput"
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={(e) => search(e, searchTerm)}
        />
        <button className="searchButton" onClick={(e) => search(e, searchTerm)}>
          GO
        </button>
      </form>
    </div>
  );
};

/* Export Statement */
export default SearchBar;

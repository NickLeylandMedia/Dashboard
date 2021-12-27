/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "./styles/App.scss";

/* Image Imports */

/* Component Imports */
import Bookmarks from "./components/Bookmarks";
import Productivity from "./components/Productivity";
import QuickBar from "./components/QuickBar";
import SearchBar from "./components/SearchBar";
import Reminders from "./components/Reminders";

/* Component/Functions */
const App = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <QuickBar />
      <div className="row">
        <Bookmarks />
        <Productivity />
      </div>
    </React.Fragment>
  );
};

/* Export Statement */
export default App;

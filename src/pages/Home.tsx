/* Library Imports */
//React
import React, { useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import GridMenu from "../components/gridMenu/GridMenu";
import NavBar from "../components/navBar/NavBar";

/* Module Imports */

/* Component Interfaces */

/* Component/Functions */
const Home = () => {
  //Menu display state
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

  //Function to toggle menu display
  const toggleMenuDisplay = () => {
    setMenuDisplay(!menuDisplay);
  };

  //Function return statement
  return (
    <div className="page blackBack">
      <NavBar cb={toggleMenuDisplay} />
      <div className="content">
        <GridMenu />
      </div>
      <div className="footer"></div>
    </div>
  );
};

/* Export Statement */
export default Home;

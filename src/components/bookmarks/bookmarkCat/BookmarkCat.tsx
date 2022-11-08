/* Library Imports */
//React
import React, { useState } from "react";

/* Stylesheet Imports */
import "./BookmarkCat.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  bmCat: any;
}

/* Component/Functions */
const BookmarkCat: React.FC<Props> = ({ bmCat }) => {
  //State to store collapsed state
  const [collapsed, setCollapsed] = useState<boolean>(true);

  //Collapsed state Css variable
  let colVar: any;

  //Function to toggle collapsed state
  const toggleCollapsed = () => {
    console.log("Toggling collapsed state");
    setCollapsed(!collapsed);
  };

  //Logic to render links
  let renderedLinks: any = "No links to display.";
  if (bmCat.items.length > 0) {
    renderedLinks = bmCat.items.map((link: any) => {
      return <a href={link.URL}>{link.Name}</a>;
    });
  }

  //Function return statement
  if (!collapsed) {
    colVar = "large";
  }

  return (
    <div
      className={`BookmarkCat ${colVar}`}
      onClick={() => {
        toggleCollapsed();
      }}
    >
      <h2>{bmCat.categoryName}</h2>
      <div className="linkBox">{renderedLinks}</div>
    </div>
  );
};

/* Export Statement */
export default BookmarkCat;

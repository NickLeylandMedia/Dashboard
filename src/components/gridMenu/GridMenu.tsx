/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "./GridMenu.scss";

/* Image Imports */

/* Component Imports */
import LogoCard from "../logoCard/LogoCard";

/* Module Imports */

/* Component Interfaces */
interface rendObj {
  image: string;
  text: string;
}

interface Props {
  items: rendObj[];
}

/* Component/Functions */
const GridMenu = () => {
  //Function return statement
  return (
    <section className="GridMenu">
      <LogoCard image="book" text="Bookmarks" />
      <LogoCard image="mail" text="Mail" />
      <LogoCard image="photo" text="Photos" />
      <LogoCard image="post" text="Posting" />
      <LogoCard image="user" text="Users" />
      <LogoCard image="flow" text="Workflows" />
    </section>
  );
};

/* Export Statement */
export default GridMenu;

/* Library Imports */
//React
import React, { useState } from "react";

/* Stylesheet Imports */
import "./GridItem.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */
import { PhotoContext } from "../../../contexts/photoContext";

/* Component Interfaces */
interface Props {
  url: string;
  id: string;
  photo: any;
}

/* Component/Functions */
const GridItem: React.FC<Props> = ({ url, id, photo }) => {
  const manip: any = React.useContext(PhotoContext);

  //Function return statement
  return (
    <img
      src={url}
      className="GridItem"
      alt=""
      //   onMouseOver={() => manip.setTargID(id)}
      onClick={() => manip.setTargID(id)}
    />
  );
};

/* Export Statement */
export default GridItem;

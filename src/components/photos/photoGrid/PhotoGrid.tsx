/* Library Imports */
//React
import React, { useRef } from "react";

/* Stylesheet Imports */
import "./PhotoGrid.scss";

/* Image Imports */

/* Component Imports */
import GridItem from "../gridItem/GridItem";

/* Module Imports */

/* Component Interfaces */
interface Props {
  photos: any[];
}

/* Component/Functions */
const PhotoGrid: React.FC<Props> = ({ photos }) => {
  //Loading Ref
  const loadingRef = useRef<boolean>(true);

  console.log(loadingRef.current);

  if (photos.length > 0) {
    //Variable for displaying rendered grid items
    const renderedGridItems = photos.map((photo) => {
      return <GridItem id={photo.Name} url={photo.URL} photo={photo} />;
    });
    loadingRef.current = false;
    //Function return statement
    return (
      <section className="PhotoGrid">
        <div className="actionBar"></div>
        <div className="gridDisp">{renderedGridItems}</div>
      </section>
    );
  }

  if (loadingRef.current) {
    return <h2 className="statusText">Loading...</h2>;
  }

  if (photos.length === 0 || !photos) {
    return <h2 className="statusText">There are no photos to display.</h2>;
  }

  return <h2 className="statusText">Something has gone wrong.</h2>;
};

/* Export Statement */
export default PhotoGrid;

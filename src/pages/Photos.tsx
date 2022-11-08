/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import NavBar from "../components/navBar/NavBar";
import PhotoDetail from "../components/photos/photoDetail/PhotoDetail";
import PhotoGrid from "../components/photos/photoGrid/PhotoGrid";

/* Component Interfaces */

/* Module Imports */
import { getPhotos } from "../modules/firebase";
import { PhotoContext } from "../contexts/photoContext";

/* Component/Functions */
const Photos = () => {
  /* Menu Display State */
  //Menu display state
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

  //Function to toggle menu display
  const toggleMenuDisplay = () => {
    setMenuDisplay(!menuDisplay);
  };
  /* End Menu Display State */

  /* Retrieve photos from firebase and consolidate into an array */
  //Variable for storing unprocessed payload.
  const payload: any[] = [];

  //Variable for storing processed payload as state.
  const [renderLoad, setRenderLoad] = useState<any[]>([]);

  //Effect to retrieve photos from firebase on load.
  useEffect(() => {
    getPhotos().then((res) => {
      res.forEach((doc) => {
        console.log(doc);
        payload.push(doc.data());
      });
      setRenderLoad(payload);
    });
  }, []);
  /* End of photo retrieval */

  /* Logic to determine which component to render */
  //State to store page display mode.
  const [dispMode, setMode] = useState<"gallery" | "detail">("gallery");
  //State to store target photo ID.
  const [targID, setTargID] = useState<string>("");

  //Effect to switch gallery to detail mode when targID is set.
  useEffect(() => {
    if (targID !== "") {
      setMode("detail");
    }
  }, [targID]);

  //Variable for storing rendered component.
  let renderedComp = <PhotoGrid photos={renderLoad} />;
  //Logic to determine which component to render based on state.
  if (dispMode === "detail") {
    renderedComp = <PhotoDetail targID={targID} data={""} />;
  }
  /* End of logic to determine which component to render */

  //Function return statement
  return (
    <div className="page blackBack">
      <NavBar cb={toggleMenuDisplay} />
      <div className="content">
        <PhotoContext.Provider
          value={{ dispMode, setMode, targID, setTargID, renderLoad }}
        >
          {renderedComp}
        </PhotoContext.Provider>
        {/* <PhotoChecklist /> */}
      </div>
      <div className="footer"></div>
    </div>
  );
};

/* Export Statement */
export default Photos;

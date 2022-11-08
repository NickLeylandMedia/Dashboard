/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import BookmarkDisp from "../components/bookmarks/bookmarkDisp/BookmarkDisp";
import GridMenu from "../components/gridMenu/GridMenu";
import NavBar from "../components/navBar/NavBar";

/* Module Imports */
import {
  getBookmarks,
  getOrganizedMarks,
  snapshotMarks,
  snapAndOrgMarks,
} from "../modules/firebase";

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  query,
  onSnapshot,
  where,
} from "firebase/firestore";
import { updateAllPhotosPV } from "../modules/firebase";

/* Component Interfaces */

/* Component/Functions */
const Bookmarks = () => {
  //Menu display state
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

  //Function to toggle menu display
  const toggleMenuDisplay = () => {
    setMenuDisplay(!menuDisplay);
  };

  //State to store bookmarks
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  // Get bookmarks from firebase and set state
  useEffect(() => {
    const asyncLog = async () => {
      const marks = await snapAndOrgMarks(setBookmarks);
    };
    asyncLog();
  }, []);

  //Function return statement
  if (menuDisplay) {
    return (
      <div className="page blackBack">
        <NavBar cb={toggleMenuDisplay} />
        <div className="content">
          <GridMenu />
        </div>
        <div className="footer"></div>
      </div>
    );
  }

  return (
    <div className="page blackBack">
      <NavBar cb={toggleMenuDisplay} />
      <div className="content">
        <BookmarkDisp bookmarks={bookmarks} />
      </div>
      <div className="footer"></div>
    </div>
  );
};

/* Export Statement */
export default Bookmarks;

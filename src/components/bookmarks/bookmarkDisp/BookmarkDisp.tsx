/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "./BookmarkDisp.scss";

/* Image Imports */

/* Component Imports */
import BookmarkCat from "../bookmarkCat/BookmarkCat";

/* Module Imports */

/* Component Interfaces */
interface Props {
  bookmarks: any[];
}

/* Component/Functions */
const BookmarkDisp: React.FC<Props> = ({ bookmarks }) => {
  //Variable for rendered bookmarks
  let renderedBookmarks: any = "No bookmarks to display.";

  //Logic to render bookmarks
  if (bookmarks.length > 0) {
    renderedBookmarks = bookmarks.map((cat) => {
      return <BookmarkCat bmCat={cat} />;
    });
  }

  //Function return statement
  return <div className="BookmarkDisp">{renderedBookmarks}</div>;
};

/* Export Statement */
export default BookmarkDisp;

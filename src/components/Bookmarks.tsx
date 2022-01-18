/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import "../styles/Bookmarks.scss";

/* Image Imports */
import squareClose from "../img/squareClose.svg";

/* Component Imports */

/* Component Interfaces */
type Props = {
  addBookmark: (Category: string, Name: string, URL: string) => Promise<void>;
  bookMarks: any[];
};

/* Component/Functions */
const Bookmarks: React.FC<Props> = ({ addBookmark, bookMarks }) => {
  //Bookmark Sorting
  const categoryArr: any[] = [];
  const activeArr: any[] = [];
  let sortedFinal: any[] = [];
  for (let i = 0; i < bookMarks.length; i++) {
    if (categoryArr.includes(bookMarks[i].Category)) {
    } else {
      categoryArr.push(bookMarks[i].Category);
      console.log(categoryArr);
      categoryArr.sort((a, b) => (a < b ? -1 : 1));
    }
  }
  for (let i = 0; i < categoryArr.length; i++) {
    let Category = (Name: string) => {
      return { Category: Name, Items: [] };
    };
    activeArr.push(Category(categoryArr[i]));
    console.log(activeArr);
  }
  for (let i = 0; i < activeArr.length; i++) {
    const filtrate = bookMarks.filter((item) => {
      return item.Category === activeArr[i].Category;
    });
    activeArr[i].Items = filtrate;
    console.log(activeArr);
  }

  //Category Expansion Logic
  let expandHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    let evTarg = e.target as HTMLButtonElement;
    let botTarg = evTarg.parentElement?.nextSibling as HTMLBodyElement;
    if (botTarg.classList.contains("show")) {
      botTarg.classList.remove("show");
    } else {
      botTarg.classList.add("show");
    }
  };

  const bookmarkHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: any = e.target;
    addBookmark(formData[0].value, formData[1].value, formData[2].value);
    formData[0].value = "";
    formData[1].value = "";
    formData[2].value = "";
    document.querySelector(".successText")?.classList.toggle("show");
    setTimeout(() => {
      document.querySelector(".successText")?.classList.toggle("show");
    }, 1000);
  };

  //Bookmark render logic - Categories.
  let renderedCats = activeArr.map(({ Category, Items }) => {
    let renderedItems = Items.map(
      ({ Name, URL }: { Name: string; URL: string }) => {
        return (
          <li className="link">
            <a href={URL}>{Name}</a>
          </li>
        );
      }
    );
    return (
      <div className="bmCat">
        <div className="catTop card">
          <h4>{Category}</h4>
          <button
            className="catIntButton btn btn-primary"
            onClick={expandHandler}
          >
            [+]
          </button>
        </div>
        <div className="catBottom card">
          <ul className="linkList">{renderedItems}</ul>
        </div>
      </div>
    );
  });

  //State to store component "maintenance" state
  const [maint, setMaint] = useState<boolean>(false);

  //Logic for showing maintenance panel
  if (maint) {
    return (
      <div className="Bookmarks">
        <h3 className="modTitle">Bookmarks Maintenance Panel</h3>
        <div className="bmMaint">
          <form onSubmit={bookmarkHandler} className="bmForm">
            <div className="bmInput">
              <label htmlFor="" className="bmInputLabel">
                Category
              </label>
              <input type="text" className="bmInput" />
            </div>
            <div className="bmInput">
              <label htmlFor="" className="bmInputLabel">
                Name
              </label>
              <input type="text" className="bmInput" />
            </div>
            <div className="bmInput">
              <label htmlFor="" className="bmInputLabel">
                URL
              </label>
              <input type="text" className="bmInput" />
            </div>
            <div className="bmInput">
              <button className="addBmButton">Add Bookmark</button>
            </div>
            <p className="successText">Bookmark added!</p>
          </form>
          <button className="maintPanelButton">EDIT/DELETE BOOKMARKS</button>
          <button className="maintPanelButton">CLOSE PANEL</button>
        </div>
      </div>
    );
  } else {
    //Function Return Statement
    return (
      <div className="Bookmarks">
        <h2 className="modTitle">Bookmarks</h2>
        <div className="catCont">{renderedCats}</div>
        <div className="bmActions">
          <button className="actionButton" onClick={() => setMaint(true)}>
            EDIT
          </button>
        </div>
      </div>
    );
  }
};

/* Export Statement */
export default Bookmarks;

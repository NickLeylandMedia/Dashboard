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
};

/* Component/Functions */
const Bookmarks: React.FC<Props> = ({ addBookmark }) => {
  //Array to render bookmarks from.
  const marks = [
    {
      Category: "3D Printing Models",
      Items: [
        {
          Name: "Cults3D",
          URL: "https://www.cults3d.com",
        },
        {
          Name: "GrabCAD",
          URL: "http://www.grabcad.com",
        },
        {
          Name: "My Mini Factory",
          URL: "http://www.myminifactory.com",
        },
        {
          Name: "Pinshape",
          URL: "http://www.pinshape.com",
        },
        {
          Name: "Redpah",
          URL: "http://www.redpah.com",
        },
        {
          Name: "Thangs",
          URL: "http://www.thangs.com",
        },
        {
          Name: "Thingiverse",
          URL: "https://www.thingiverse.com",
        },
        {
          Name: "Yeggi",
          URL: "",
        },
      ],
    },
    {
      Category: "3D Printing Supplies",
      Items: [
        {
          Name: "Hatchbox Filaments",
          URL: "https://www.hatchbox3d.com/",
        },
        {
          Name: "Siraya Tech Resins",
          URL: "https://siraya.tech/",
        },
      ],
    },
    {
      Category: "Icon/Img",
      Items: [
        {
          Name: "Icons8",
          URL: "https://Icons8.com/",
        },
        {
          Name: "Tabler Icons",
          URL: "https://tablerIcons.com/",
        },
        {
          Name: "Iconfinder",
          URL: "",
          Icon: "https://Iconfinder.com/",
        },
        {
          Name: "SVG Crop",
          URL: "https://svgcrop.com/",
        },
      ],
    },
    {
      Category: "Logistics",
      Items: [
        {
          Name: "Google Maps",
          URL: "https://www.maps.google.com",
        },
        {
          Name: "My Maps",
          URL: "https://www.google.com/maps/d/",
        },
        {
          Name: "The Photographer's Ephemeris",
          URL: "https://app.photoephemeris.com/",
        },
      ],
    },
    {
      Category: "Misc. Shopping",
      Items: [
        {
          Name: "Displate - Popart Master Chief",
          URL: "https://displate.com/displate/5136625?pe=Pop,military,gaming&dfw_tracker=99573-5136625&gclid=Cj0KCQiAzMGNBhCyARIsANpUkzPonNSM8Zxzm9Ugqt7ZE8cqtn4YwkHPfmLkACCFwZ7BgEyp8HOZeooaApPeEALw_wcB",
          Note: "",
        },
      ],
    },
    {
      Category: "Web Admin",
      Items: [
        {
          Name: "A2 Hosting",
          URL: "https://my.a2hosting.com/clientarea.php",
        },
        {
          Name: "Google Domains",
          URL: "https://domains.google.com/m/registrar/",
        },
        {
          Name: "Google Analytics",
          URL: "https://analytics.google.com/",
        },
        {
          Name: "Google Search Console",
          URL: "https://bit.ly/3jxgAXF",
        },
        {
          Name: "Domain Name Generator",
          URL: "https://www.namemesh.com/",
        },
      ],
    },
    {
      Category: "Web Design",
      Items: [
        {
          Name: "CSS Animated Backgrounds",
          URL: "https://www.sliderrevolution.com/resources/css-animated-background/",
        },
        {
          Name: "CSS Lab",
          URL: "https://csslab.app/",
        },
        {
          Name: "HTML/CSS Best Practices",
          URL: "https://google.github.io/styleguide/htmlcssguide.html#HTML_Style_Rules",
        },
        {
          Name: "Orbit - Futuristic Sci Fi Bootstrap Theme",
          URL: "https://www.codester.com/items/20904/orbit-futuristic-scifi-bootstrap-4-html-theme",
          Note: "Use for inspiration for campaign app design.",
        },
        {
          Name: "RGB Color Codes",
          URL: "https://bit.ly/3b3cNNf",
        },
        {
          Name: "Web Design Tips",
          URL: "https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886",
        },
      ],
    },
    {
      Category: "Web Development",
      Items: [
        {
          Name: "Electron",
          URL: "https://www.electronjs.org/",
          Note: "Use for building cross-platform web applications.",
        },
        {
          Name: "Free For Developers",
          URL: "https://free-for.dev/#/",
          Note: "List of resources available for free to developers.",
        },
        {
          Name: "Free SVG Illustrations",
          URL: "https://www.reddit.com/r/webdev/comments/eejh52/websites_i_use_for_free_svg_illustrations/",
        },
        {
          Name: "Javascript Keycodes",
          URL: "https://keycode.info/",
        },
        {
          Name: "Mozilla MDN",
          URL: "https://developer.mozilla.org/en-US/",
        },
        {
          Name: "Web Skills Ladder",
          URL: "https://andreasbm.github.io/web-skills/",
        },
        {
          Name: "W3 Schools",
          URL: "https://www.w3schools.com/",
        },
      ],
    },
  ];

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
  let renderedCats = marks.map(({ Category, Items }) => {
    let renderedItems = Items.map(({ Name, URL }) => {
      return (
        <li className="link">
          <a href={URL}>{Name}</a>
        </li>
      );
    });
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
          <img
            src={squareClose}
            alt=""
            onClick={() => setMaint(false)}
            className="closeBmPanel"
          />
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

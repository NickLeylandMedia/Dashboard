/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "../styles/Bookmarks.scss";

/* Image Imports */

/* Component Imports */

/* Component/Functions */
const Bookmarks = () => {
  //Array to render bookmarks from.
  const marks = [
    {
      Category: "3D Printing Models",
      Items: [
        {
          Name: "Cults3D",
          URL: "https://www.cults3d.com",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "GrabCAD",
          URL: "http://www.grabcad.com",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "My Mini Factory",
          URL: "http://www.myminifactory.com",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "Pinshape",
          URL: "http://www.pinshape.com",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "Redpah",
          URL: "http://www.redpah.com",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "Thangs",
          URL: "http://www.thangs.com",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "Thingiverse",
          URL: "https://www.thingiverse.com",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "Yeggi",
          URL: "",
          Icon: "",
          ShortName: "",
        },
      ],
    },
    {
      Category: "3D Printing Supplies",
      Items: [
        {
          Name: "Hatchbox Filaments",
          URL: "https://www.hatchbox3d.com/",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "Siraya Tech Resins",
          URL: "https://siraya.tech/",
          Icon: "",
          ShortName: "",
        },
      ],
    },
    {
      Category: "Icon/Img",
      Items: [
        {
          Name: "Icons8",
          URL: "https://Icons8.com/",
          Icon: "",
          ShortName: "I8",
        },
        {
          Name: "Tabler Icons",
          URL: "https://tablerIcons.com/",
          Icon: "",
          ShortName: "Tabler",
        },
        {
          Name: "Iconfinder",
          URL: "",
          Icon: "https://Iconfinder.com/",
          ShortName: "IF",
        },
        {
          Name: "SVG Crop",
          URL: "https://svgcrop.com/",
          Icon: "",
          ShortName: "SVGC",
        },
      ],
    },
    {
      Category: "Logistics",
      Items: [
        {
          Name: "Google Maps",
          URL: "https://www.maps.google.com",
          Icon: "",
          ShortName: "Maps",
        },
        {
          Name: "My Maps",
          URL: "https://www.google.com/maps/d/",
          Icon: "",
          ShortName: "MyMaps",
        },
        {
          Name: "The Photographer's Ephemeris",
          URL: "https://app.photoephemeris.com/",
          Icon: "",
          ShortName: "TPE",
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
          ShortName: "",
        },
      ],
    },
    {
      Category: "Web Admin",
      Items: [
        {
          Name: "A2 Hosting",
          URL: "https://my.a2hosting.com/clientarea.php",
          Icon: "",
          ShortName: "A2",
        },
        {
          Name: "Google Domains",
          URL: "https://domains.google.com/m/registrar/",
          Icon: "",
          ShortName: "GD",
        },
        {
          Name: "Google Analytics",
          URL: "https://analytics.google.com/",
          Icon: "",
          ShortName: "GA",
        },
        {
          Name: "Google Search Console",
          URL: "https://bit.ly/3jxgAXF",
          Icon: "",
          ShortName: "GSC",
        },
        {
          Name: "Domain Name Generator",
          URL: "https://www.namemesh.com/",
          Icon: "",
          ShortName: "NameMesh",
        },
      ],
    },
    {
      Category: "Web Design",
      Items: [
        {
          Name: "CSS Animated Backgrounds",
          URL: "https://www.sliderrevolution.com/resources/css-animated-background/",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "CSS Lab",
          URL: "https://csslab.app/",
          Icon: "",
          ShortName: "CSSLab",
        },
        {
          Name: "HTML/CSS Best Practices",
          URL: "https://google.github.io/styleguide/htmlcssguide.html#HTML_Style_Rules",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "Orbit - Futuristic Sci Fi Bootstrap Theme",
          URL: "https://www.codester.com/items/20904/orbit-futuristic-scifi-bootstrap-4-html-theme",
          Note: "Use for inspiration for campaign app design.",
        },
        {
          Name: "RGB Color Codes",
          URL: "https://bit.ly/3b3cNNf",
          Icon: "",
          ShortName: "RGB-CC",
        },
        {
          Name: "Web Design Tips",
          URL: "https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886",
          Icon: "",
          ShortName: "",
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
          ShortName: "",
        },
        {
          Name: "Free For Developers",
          URL: "https://free-for.dev/#/",
          Note: "List of resources available for free to developers.",
          ShortName: "",
        },
        {
          Name: "Free SVG Illustrations",
          URL: "https://www.reddit.com/r/webdev/comments/eejh52/websites_i_use_for_free_svg_illustrations/",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "Javascript Keycodes",
          URL: "https://keycode.info/",
          Icon: "",
          ShortName: "JS-KC",
        },
        {
          Name: "Mozilla MDN",
          URL: "https://developer.mozilla.org/en-US/",
          Icon: "",
          ShortName: "MDN",
        },
        {
          Name: "Web Skills Ladder",
          URL: "https://andreasbm.github.io/web-skills/",
          Icon: "",
          ShortName: "",
        },
        {
          Name: "W3 Schools",
          URL: "https://www.w3schools.com/",
          Icon: "",
          ShortName: "W3",
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

    console.log(botTarg);
  };

  //Bookmark render logic - Categories.
  let renderedCats = marks.map(({ Category, Items }) => {
    let renderedItems = Items.map(({ Name, URL, Icon, ShortName }) => {
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

  //Function Return Statement
  return (
    <div className="Bookmarks">
      <h2 className="modTitle">Bookmarks</h2>
      <div className="catCont">{renderedCats}</div>
    </div>
  );
};

/* Export Statement */
export default Bookmarks;

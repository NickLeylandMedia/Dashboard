/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "./NavBar.scss";

/* Image Imports */
import { CgMenuGridR } from "react-icons/cg";
import nl from "../../img/unboxed.svg";

/* Module Imports */

/* Component Interfaces */
interface Props {
  cb: any;
}

/* Component/Functions */
const NavBar: React.FC<Props> = ({ cb }) => {
  //Function return statement
  return (
    <nav className="mainNav">
      <div className="logoBox">
        <img src={nl} className="navLogo" alt="" />
      </div>
      {/* <div className="navLinks">
        <div className="navItem">
          <a className="navLink" href="">
            Home
          </a>
        </div>
        <div className="navItem">
          <a className="navLink" href="">
            Apps
          </a>
        </div>
        <div className="navItem">
          <a className="navLink" href="">
            Photos
          </a>
        </div>
        <div className="navItem">
          <a className="navLink" href="">
            Messages
          </a>
        </div>
        <div className="navItem">
          <a className="navLink" href="">
            Bookmarks
          </a>
        </div>
      </div> */}
      <div className="navExpand">
        <CgMenuGridR className="navButton" onClick={() => cb()} />
      </div>
    </nav>
  );
};

/* Export Statement */
export default NavBar;

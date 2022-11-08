/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import "./LogoCard.scss";

/* Image Imports */
import { FaMailBulk, FaUsers } from "react-icons/fa";

import { TiFlowChildren } from "react-icons/ti";

import { IoMdPhotos } from "react-icons/io";

import { MdOutlinePostAdd } from "react-icons/md";

import { RiBookMarkFill } from "react-icons/ri";

/* Component Imports */

/* Module Imports */
//Detect It
import { deviceType } from "detect-it";

/* Component Interfaces */
interface Props {
  text: string;
  image: "mail" | "user" | "photo" | "flow" | "post" | "book";
}

/* Component/Functions */
const LogoCard: React.FC<Props> = ({ image, text }) => {
  /* MOBILE STATE LOGIC */
  //Logic + Vars for hover state
  let hoverCond: any;

  //State to store mobile logic
  const [isMobile, setMob] = useState<boolean>(false);

  //Logic to set if mobile
  useEffect(() => {
    if (deviceType !== "mouseOnly") setMob(true);
  }, []);

  //Logic to determine hover condition
  if (!isMobile) hoverCond = "hover";
  /* END MOBILE STATE LOGIC */

  //String to icon reference
  const iconRef = {
    book: <RiBookMarkFill className="cardImage" />,
    flow: <TiFlowChildren className="cardImage" />,
    mail: <FaMailBulk className="cardImage" />,
    photo: <IoMdPhotos className="cardImage" />,
    post: <MdOutlinePostAdd className="cardImage" />,
    user: <FaUsers className="cardImage" />,
  };

  //selected icon
  const renderedIcon: any = iconRef[image];

  //Function return statement
  return (
    <a className={`LogoCard ${hoverCond}`}>
      {renderedIcon}
      <p>{text}</p>
    </a>
  );
};

/* Export Statement */
export default LogoCard;

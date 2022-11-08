/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import "./PhotoDetail.scss";

/* Image Imports */
import blank from "../../../img/blankBox.svg";
import checked from "../../../img/checkedBox.svg";
import { IoArrowBack } from "react-icons/io5";

/* Component Imports */

/* Module Imports */
import { PhotoContext } from "../../../contexts/photoContext";
import { updateItem } from "../../../modules/firebase";

/* Component Interfaces */
interface Props {
  targID: string;
  data: any;
}

/* Component/Functions */
const PhotoDetail: React.FC<Props> = ({ data, targID }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [renderedOb, setRenderedOb] = useState<any>(<h2>LOADING</h2>);
  const manip: any = React.useContext(PhotoContext);

  //State for storing checkbox values
  const [checkObs, setChecks] = useState<any>([]);

  //Logic to render checkmark objects
  const renderedChecks = checkObs.map((check: any) => {
    //Swapping Function
    const swapStyle = (name: string) => {
      const proxArr = [...checkObs];
      const targIndex = checkObs.findIndex((item: any) => {
        return item.name === name;
      });
      if (proxArr[targIndex].active === true) {
        proxArr[targIndex].active = false;
      } else if (proxArr[targIndex].active === false) {
        proxArr[targIndex].active = true;
      }

      setChecks(proxArr);
      updateItem("Photos", targID, name, proxArr[targIndex].active);
    };
    //End Swapping Function

    //Return statement - render logic.
    if (check.active) {
      return (
        <div className="itemCheck">
          <div className="imgCont">
            <img
              src={checked}
              alt=""
              className="itemImg"
              onClick={() => swapStyle(check.name)}
            />
          </div>
          <div className="toolTip">{check.name}</div>
        </div>
      );
    }
    return (
      <div className="itemCheck">
        <div className="imgCont">
          <img
            src={blank}
            alt=""
            className="itemImg"
            onClick={() => swapStyle(check.name)}
          />
        </div>
        <div className="toolTip">{check.name}</div>
      </div>
    );
    //End Return statement
  });

  /* Logic to pull data for target photo from renderload */
  useEffect(() => {
    manip.renderLoad.filter((photo: any) => {
      if (photo.Name === targID) {
        //Set state to render photo
        setRenderedOb(
          <div className="detail">
            {/* <IoArrowBack className="backArrow" /> */}
            <h2 className="photoTitle">{photo.Name}</h2>
            <button
              className="backButton"
              onClick={() => manip.setMode("gallery")}
            >
              BACK TO GALLERY
            </button>
            <img src={photo.URL} className="detailImg" alt="" />
            <div></div>
          </div>
        );

        //Set state to render checkboxes
        setChecks([
          { name: "Facebookpage", active: photo.Facebookpage },
          { name: "Instagram", active: photo.Instagram },
          { name: "Flickr", active: photo.Flickr },
          { name: "Website", active: photo.Website },
          { name: "rSkyporn", active: photo.rSkyporn },
          { name: "rSunset", active: photo.rSunset },
          { name: "rITAP", active: photo.rITAP },
          { name: "rSunriseSunset", active: photo.rSunriseSunset },
          { name: "rPic", active: photo.rPic },
          { name: "rSeascapes", active: photo.rSeascapes },
          { name: "rEarthporn", active: photo.rSunset },
        ]);
      }
    });
  }, []);

  useEffect(() => {}, [isLoading]);

  //Function return statement
  return (
    <div className="PhotoDetail">
      {renderedOb}
      <div className="checkCont">{renderedChecks}</div>
    </div>
  );
};

/* Export Statement */
export default PhotoDetail;

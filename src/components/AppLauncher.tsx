/* Library Imports */
//React
import React, { useState } from "react";

/* Stylesheet Imports */
import "../styles/AppLauncher.scss";

/* Image Imports */
import { BsGithub, BsYoutube } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaRedditSquare,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import { GrPlay } from "react-icons/gr";
import { SiGmail, SiHulu, SiNetflix, SiUdemy } from "react-icons/si";

/* Component Imports */

/* Component Interfaces */
interface Props {
  activeToggler: (App: string) => void;
  apps: any[];
}

/* Component/Functions */
const AppLauncher: React.FC<Props> = ({ apps, activeToggler }) => {
  const iconArr: any = [
    { Name: "Facebook", Icon: FaFacebookSquare },
    { Name: "GitHub", Icon: BsGithub },
    { Name: "Gmail", Icon: SiGmail },
    { Name: "Hulu", Icon: SiHulu },
    { Name: "Netflix", Icon: SiNetflix },
    { Name: "Paramount+", Icon: GrPlay },
    { Name: "Reddit", Icon: FaRedditSquare },
    { Name: "Spotify", Icon: FaSpotify },
    { Name: "Twitter", Icon: FaTwitter },
    { Name: "Udemy", Icon: SiUdemy },
    { Name: "Youtube", Icon: BsYoutube },
  ];

  //State to store maintenance state
  const [maintMode, setMaint] = useState<Boolean>(false);

  //Logic to render apps
  let renderedApps;
  let renderedMaintApps;
  let targIcon: any;

  if (apps.length) {
    let activeApps = apps.filter((app) => {
      return app.Active;
    });

    renderedMaintApps = apps.map(({ Name, URL, Active }) => {
      let index = iconArr.findIndex((item: any) => {
        return item.Name === Name;
      });
      targIcon = iconArr[index].Icon();

      if (Active) {
        return (
          <div className="launApp active" onClick={() => activeToggler(Name)}>
            {targIcon}
            <div className="launAppInfo">
              <p>{Name}</p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="launApp" onClick={() => activeToggler(Name)}>
            {targIcon}

            <div className="launAppInfo">
              <p>{Name}</p>
            </div>
          </div>
        );
      }
    });

    if (activeApps.length) {
      renderedApps = activeApps.map(({ Name, URL }) => {
        let index = iconArr.findIndex((item: any) => {
          return item.Name === Name;
        });
        targIcon = iconArr[index].Icon();
        return (
          <div className="launApp">
            {targIcon}
            <div className="launAppInfo">
              <a href={URL}>{Name}</a>
            </div>
          </div>
        );
      });
    } else {
      renderedApps = <div className="noActive">No Active Apps!</div>;
    }
  } else {
    renderedMaintApps = <div className="noActive">No Apps Loaded</div>;
  }

  //Function return statement

  if (maintMode) {
    return (
      <div className="AppLauncher">
        <div className="launcher-cont">{renderedMaintApps}</div>
        <button className="editAppsButton" onClick={() => setMaint(false)}>
          Finish
        </button>
      </div>
    );
  } else {
    return (
      <div className="AppLauncher">
        <div className="launcher-cont">{renderedApps}</div>
        <button className="editAppsButton" onClick={() => setMaint(true)}>
          Edit Active Apps
        </button>
      </div>
    );
  }
};

/* Export Statement */
export default AppLauncher;

/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "../styles/QuickBar.scss";

/* Image Imports */
import YoutubeLogo from "../img/Youtube.svg";
import UdemyLogo from "../img/Udemy.svg";
import FacebookLogo from "../img/Facebook.svg";
import RedditLogo from "../img/Reddit.svg";
import GithubLogo from "../img/github.svg";

/* Component Imports */

/* Component/Functions */
const QuickBar = () => {
  //Array to render quick access from.
  const quick: any[] = [
    {
      Name: "Facebook",
      Icon: FacebookLogo,
      URL: "https://www.facebook.com/",
    },
    {
      Name: "GitHub",
      Icon: GithubLogo,
      URL: "https://www.github.com/",
    },
    {
      Name: "YouTube",
      Icon: YoutubeLogo,
      URL: "https://www.youtube.com/",
    },
    {
      Name: "Udemy",
      Icon: UdemyLogo,
      URL: "https://www.udemy.com/",
    },
    {
      Name: "Reddit",
      Icon: RedditLogo,
      URL: "https://www.reddit.com/",
    },
  ];
  //Logic to render quick access.
  const renderedQuick = quick.map(({ Name, Icon, URL }) => {
    return (
      <div key={`qi${Name}`} className="quickItem">
        <a href={URL}>
          <img src={Icon} alt="" className="quickImg" />
        </a>
        <a href={URL} className="quickLink">
          {Name}
        </a>
      </div>
    );
  });

  //Function Return Statement
  return <div className="QuickBar">{renderedQuick}</div>;
};

/* Export Statement */
export default QuickBar;

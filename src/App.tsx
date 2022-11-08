/* Library Imports */
//Axios
import axios from "axios";

//Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  getDoc,
} from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import "./styles/App.scss";

/* Image Imports */

/* Component Imports */

/* Component/Functions */
const App = () => {
  /* Firebase Config */
  //Configure Database
  const firebaseConfig = {
    apiKey: "AIzaSyBtwiL05692OikXEwHCufOXs170Asyq618",
    authDomain: "dashboard-45d62.firebaseapp.com",
    projectId: "dashboard-45d62",
    storageBucket: "dashboard-45d62.appspot.com",
    messagingSenderId: "882770343967",
    appId: "1:882770343967:web:e6c13b24a2518234e23d2a",
    measurementId: "G-9WR870YQM9",
  };

  //Initialize firebase
  const conn = initializeApp(firebaseConfig);
  const db = getFirestore(conn);
  const analytics = getAnalytics(conn);

  //Load data from firebase
  useEffect(() => {
    const fetchData = async (db: any) => {
      const marksArr: any = [];
      const appsArr: any = [];
      const finalAppArr: any = [];
      const proxAppsArr: any = [];
      const fullMarkQuery = await getDocs(collection(db, "Bookmarks"));
      const fullAppQuery = await getDocs(collection(db, "Apps"));
      const appProcess = fullAppQuery.forEach((doc) => {
        proxAppsArr.push(doc.data());
      });
      const markProcess = fullMarkQuery.forEach((doc) => {
        marksArr.push(doc.data());
      });

      const App = (Icon: string, Name: string, URL: string) => {
        return { Name: Name, Icon: Icon, URL: URL, Active: false };
      };

      proxAppsArr.forEach(
        ({ Icon, Name, URL }: { Icon: string; Name: string; URL: string }) => {
          const newApp = App(Icon, Name, URL);
          finalAppArr.push(newApp);
        }
      );

      setBookMarks(marksArr);
      setApps(finalAppArr);
    };

    //Bulk add apps
    //addApp("SiGmail", "Gmail", "https://www.mail.google.com");

    fetchData(db);
  }, []);

  //State to store bookmarks from firebase
  const [bookMarks, setBookMarks] = useState<any[]>([]);
  //State to store apps from firebase
  const [apps, setApps] = useState<any[]>([]);
  //State to store style selection
  const [color, setColor] = useState<string>("red");

  //State to set app background color
  if (color === "blue") {
    document.body.classList.remove("greenBack", "orangeBack", "redBack");
    document.body.classList.add("blueBack");
  }

  if (color === "green") {
    document.body.classList.remove("blueBack", "orangeBack", "redBack");
    document.body.classList.add("greenBack");
  }

  if (color === "orange") {
    document.body.classList.remove("blueBack", "greenBack", "redBack");
    document.body.classList.add("orangeBack");
  }

  if (color === "red") {
    document.body.classList.remove("blueBack", "greenBack", "orangeBack");
    document.body.classList.add("redBack");
  }

  //Add an app
  const addApp = async (Icon: string, Name: string, URL: string) => {
    await setDoc(doc(db, "Apps", Name), {
      Icon: Icon,
      Name: Name,
      URL: URL,
    });
  };

  //Add a bookmark
  const addBookmark = async (Category: string, Name: string, URL: string) => {
    await setDoc(doc(db, "Bookmarks", Name), {
      Category: Category,
      Name: Name,
      URL: URL,
    });
  };

  //Active app toggle handler
  const activeToggler = (App: string) => {
    let proxApps = [...apps];
    const index = proxApps.findIndex((item) => {
      return item.Name === App;
    });
    if (proxApps[index].Active === false) {
      proxApps[index].Active = true;
      setApps(proxApps);
    } else {
      proxApps[index].Active = false;
      setApps(proxApps);
    }
  };

  return (
    <div className="page">
      <nav className="mainNav"></nav>
      <div className="content"></div>
      <div className="footer"></div>
    </div>
  );
};

/* Export Statement */
export default App;

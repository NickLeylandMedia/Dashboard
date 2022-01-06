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
import React, { useEffect } from "react";

/* Stylesheet Imports */
import "./styles/App.scss";

/* Image Imports */

/* Component Imports */
import Bookmarks from "./components/Bookmarks";
import Productivity from "./components/Productivity";
import QuickBar from "./components/QuickBar";
import SearchBar from "./components/SearchBar";
import Reminders from "./components/Reminders";

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
      const arr: any = [];
      const fullQuery = await getDocs(collection(db, "Bookmarks"));
      const markProcess = fullQuery.forEach((doc) => {
        arr.push(doc.data());
      });

      console.log(arr);
    };
    fetchData(db);
  }, []);

  //Add a bookmark
  const addBookmark = async (Category: string, Name: string, URL: string) => {
    await setDoc(doc(db, "Bookmarks", Name), {
      Category: Category,
      Name: Name,
      URL: URL,
    });
  };

  return (
    <React.Fragment>
      <SearchBar />
      <QuickBar />
      <div className="row">
        <Bookmarks addBookmark={addBookmark} />
        <Productivity />
      </div>
    </React.Fragment>
  );
};

/* Export Statement */
export default App;

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  query,
  onSnapshot,
  where,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

import { urlFor } from "./urlFor";

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

/* Initialize Firebase */
const conn = initializeApp(firebaseConfig);
const db = getFirestore(conn);
const analytics = getAnalytics(conn);

/* PHOTOS */
//Get Photos from Firestore
const getPhotos = async () => {
  const photoQuery = await (await getDocs(collection(db, "Photos"))).docs;
  //return resolved promise array of items from firestore
  return photoQuery;
  // return photoQuery;
};

//Add photo to Firestore
const addPhoto = async (
  Name: string,
  URL: string,
  Facebookpage: boolean,
  Instagram: boolean,
  Flickr: boolean,
  Website: boolean,
  rSkyporn: boolean,
  rSunset: boolean,
  rITAP: boolean,
  rSunriseSunset: boolean,
  rPic: boolean,
  rSeascapes: boolean,
  rEarthporn: boolean,
  lastModified: any
) => {
  if (
    !Name ||
    !URL ||
    !Facebookpage ||
    !Flickr ||
    !Website ||
    !Instagram ||
    !rSkyporn ||
    !rSunset ||
    !rITAP ||
    !rSunriseSunset ||
    !rPic ||
    !rSeascapes ||
    !rEarthporn ||
    !lastModified
  ) {
    console.log("Missing property in 'add photo' firebase function.");
    alert("Missing property in 'add photo' firebase function.");
  }
  try {
    await setDoc(doc(db, "Photos", Name), {
      Name: Name,
      URL: URL,
      Facebookpage: Facebookpage,
      Flickr: Flickr,
      Website: Website,
      Instagram: Instagram,
      rSkyporn: rSkyporn,
      rSunset: rSunset,
      rITAP: rITAP,
      rSunriseSunset: rSunriseSunset,
      rPic: rPic,
      rSeascapes: rSeascapes,
      rEarthporn: rEarthporn,
      lastModified: lastModified,
    });
    return alert("Document successfully added to database!");
  } catch (error) {
    console.log(error);
    return alert("Failed, check console.");
  }
};

//Add all photos from array to firebase
const initialAddPhotos = async (photos: any[]) => {
  photos.forEach((photo: any) => {
    const photoUrl = String(urlFor(photo.photo));
    addPhoto(
      photo.name,
      photoUrl,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      Date.now()
    );
  });
};

//Update photo in Firestore
const updateItem = async (
  collection: string,
  docName: string,
  prop: string,
  value: any
) => {
  const docRef = doc(db, collection, docName);

  await updateDoc(docRef, { [prop]: value });
};

//Update all photos in firestore
const updateAllPhotos = async (newProp: string) => {
  const query = getPhotos();
  (await query).forEach((photo) => {
    const procPhoto = photo.data();
    updateItem("Photos", procPhoto.Name, newProp, false);
  });
};

//Update all photos in firestore
const updateAllPhotosPV = async (newProp: string, newVal: any) => {
  const query = getPhotos();
  (await query).forEach((photo) => {
    const procPhoto = photo.data();
    updateItem("Photos", procPhoto.Name, newProp, newVal);
  });
};

/* APPS */

/* BOOKMARKS */
//Bookmark category constructor
const markCons = (category: string) => {
  return {
    categoryName: category,
    items: [],
  };
};

//Get Bookmarks from Firestore
const getBookmarks = async () => {
  const marksArr: any[] = [];
  const fullMarkQuery = await getDocs(collection(db, "Bookmarks"));
  fullMarkQuery.forEach((doc) => {
    marksArr.push(doc.data());
  });
  return marksArr;
};

//Get Bookmarks and categorize by category
const getOrganizedMarks = async () => {
  const marksArr: any[] = [];
  const cats: any[] = [];
  const query = getBookmarks();
  (await query).forEach((mark) => {
    if (!cats.includes(mark.Category)) {
      cats.push(mark.Category);
    }
  });
  cats.forEach((cat) => {
    marksArr.push(markCons(cat));
  });
  (await query).forEach((mark) => {
    marksArr.forEach((cat) => {
      if (cat.categoryName === mark.Category) {
        cat.items.push(mark);
      }
    });
  });
  return marksArr;
};

//Get a snapshot of organized bookmarks
const snapshotMarks = async () => {
  try {
    const q = query(collection(db, "Bookmarks"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const marks: any[] = [];
      querySnapshot.forEach((doc) => {
        marks.push(doc.data());
      });
      console.log("Current Bookmarks: ", marks);
      if (marks.length) return marks;
    });
  } catch (error) {
    console.log(error);
    return alert("Failed, check console.");
  }
};

const snapAndOrgMarks = async (cb: any) => {
  try {
    const q = query(collection(db, "Bookmarks"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let marks: any[] = [];
      const cats: any[] = [];
      const orgMarks: any[] = [];
      querySnapshot.docChanges().forEach((change) => {
        console.log({ changeAction: change });
      });
      querySnapshot.forEach((doc) => {
        marks.push(doc.data());
      });

      //Organize Bookmarks by category
      marks.forEach((mark) => {
        if (!cats.includes(mark.Category)) {
          cats.push(mark.Category);
        }
      });
      let sortCats = cats.sort();
      sortCats.forEach((cat) => {
        orgMarks.push(markCons(cat));
      });
      marks.forEach((mark) => {
        orgMarks.forEach((cat) => {
          if (cat.categoryName === mark.Category) {
            cat.items.push(mark);
          }
        });
      });

      console.log("Current Bookmarks: ", orgMarks);
      if (cb) {
        try {
          cb(orgMarks);
        } catch (error) {
          console.log({ msg: "Callback error", err: error });
        }
      }
      return orgMarks;
    });
  } catch (error) {
    console.log(error);
    alert("Failed, check console.");
    return [];
  }
};

export {
  addPhoto,
  getPhotos,
  updateAllPhotos,
  updateAllPhotosPV,
  updateItem,
  getBookmarks,
  getOrganizedMarks,
  snapshotMarks,
  snapAndOrgMarks,
};

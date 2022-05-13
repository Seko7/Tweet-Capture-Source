// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  EmailAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiF6vWAkAw5KSUh8xzdGUYYcwIMi4p9KQ",
  authDomain: "sdfsdf-99657.firebaseapp.com",
  projectId: "sdfsdf-99657",
  storageBucket: "sdfsdf-99657.appspot.com",
  messagingSenderId: "1072063811956",
  appId: "1:1072063811956:web:7c8764f126a554193e5c21",
  measurementId: "G-GYSTGRTFZ4",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const socialMediaAuth = (provider) => {
  console.log("firbeasd");
  signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((er) => {
      return er;
    });
};
export { socialMediaAuth };

export const facebookProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const emailProvider = new EmailAuthProvider();

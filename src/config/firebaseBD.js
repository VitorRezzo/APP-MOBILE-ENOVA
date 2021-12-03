import firebase from "firebase";
import "firebase/storage";

//dados config do DB
const firebaseConfig = {
  apiKey: "AIzaSyA05d8DnBkTTls4TLuHNKvP_n8N1BoOjqs",
  authDomain: "enovaenegia.firebaseapp.com",
  projectId: "enovaenegia",
  storageBucket: "enovaenegia.appspot.com",
  messagingSenderId: "531312469072",
  appId: "1:531312469072:web:34abf503807179e87b9d55",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const firebaseBD = firebase;

export default firebaseBD;

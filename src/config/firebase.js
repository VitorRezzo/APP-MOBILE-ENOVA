import firebase from "firebase"
import "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDOximofctnzs6dPkl8zmp_L4mrZmQ76nI",
  authDomain: "enovaenergia-multitarefa.firebaseapp.com",
  projectId: "enovaenergia-multitarefa",
  storageBucket: "enovaenergia-multitarefa.appspot.com",
  messagingSenderId: "725961065739",
  appId: "1:725961065739:web:52d74526476f6c5b384e0e"
};

 firebase.initializeApp(firebaseConfig);


const FirebaseDatabase = firebase.firestore() ;

export default  FirebaseDatabase
import firebase from "firebase"
import "firebase/storage";



const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

 firebase.initializeApp(firebaseConfig);


const FirebaseDatabase = firebase.firestore() ;

export default  FirebaseDatabase
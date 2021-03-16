import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBr8zT2M1MxfKUZEDyewLlumP_rSvw9myA",
  authDomain: "react-slack-clone-f4b43.firebaseapp.com",
  projectId: "react-slack-clone-f4b43",
  databaseURL: "react-slack-clone-f4b43-default-rtdb.firebaseio.com",
  storageBucket: "react-slack-clone-f4b43.appspot.com",
  messagingSenderId: "683127706243",
  appId: "1:683127706243:web:b1a869e5d52697859141b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB3JAlI__ECtXUECFHtveWVn-OE_QQmcW4",
  authDomain: "awesometodo-3ca1c.firebaseapp.com",
  databaseURL: "https://awesometodo-3ca1c-default-rtdb.firebaseio.com",
  projectId: "awesometodo-3ca1c",
  storageBucket: "awesometodo-3ca1c.appspot.com",
  messagingSenderId: "979851032904",
  appId: "1:979851032904:web:dfc68680f234aa438b5b7d",
  measurementId: "G-EVMYQTQ7KS",
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };

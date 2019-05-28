import * as firebase from 'firebase';
// Add additional services that you want to use
// require("firebase/database");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var firebaseConfig = {
    apiKey: "AIzaSyBeRiGXwr253r4Rn8-WHtiyFwM0pFO7AiQ",
    authDomain: "burgerqueen-e1bce.firebaseapp.com",
    databaseURL: "https://burgerqueen-e1bce.firebaseio.com",
    projectId: "burgerqueen-e1bce",
    storageBucket: "burgerqueen-e1bce.appspot.com",
    messagingSenderId: "427123099358",
    appId: "1:427123099358:web:b3f1d29d81819be5"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;

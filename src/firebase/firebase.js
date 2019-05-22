import * as firebase from 'firebase';
// Add additional services that you want to use
// require("firebase/database");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyBeRiGXwr253r4Rn8-WHtiyFwM0pFO7AiQ",
    authDomain: "burgerqueen-e1bce.firebaseapp.com",
    databaseURL: "https://burgerqueen-e1bce.firebaseio.com/",
    projectId: "burgerqueen-e1bce",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
};
firebase.initializeApp(config);
export default firebase;

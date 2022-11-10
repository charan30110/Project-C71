import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyD5dDZjcNd3frn9xRhhntsgCRpZNji1EBA",
  authDomain: "e-ride-e10bf.firebaseapp.com",
  projectId: "e-ride-e10bf",
  storageBucket: "e-ride-e10bf.appspot.com",
  messagingSenderId: "103558564106",
  appId: "1:103558564106:web:b161fe8f83f77918ce92f3"
};
//
if(!firebase.apps.length){ 
  firebase.initializeApp(firebaseConfig);
} 
export default firebase.database()

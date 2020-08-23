import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMCySRDXYD2ZBMw_xBC1gayprI3NlgV-U",
  authDomain: "messenger-clone-624c8.firebaseapp.com",
  databaseURL: "https://messenger-clone-624c8.firebaseio.com",
  projectId: "messenger-clone-624c8",
  storageBucket: "messenger-clone-624c8.appspot.com",
  messagingSenderId: "93099488123",
  appId: "1:93099488123:web:a6f33523f2dfde788bc3de",
  measurementId: "G-J48WL64JHN",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;

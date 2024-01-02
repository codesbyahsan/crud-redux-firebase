import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSe8zG3joRvuBnPzZQPL5_-gENOHRWdFg",
  authDomain: "ahsaniqbal-a92cb.firebaseapp.com",
  projectId: "ahsaniqbal-a92cb",
  storageBucket: "ahsaniqbal-a92cb.appspot.com",
  messagingSenderId: "407423812306",
  appId: "1:407423812306:web:5a1966b31c6027fa70a30b",
  measurementId: "G-SBLZ5RYNBR"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
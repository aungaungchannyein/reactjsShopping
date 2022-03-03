// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBfKBXJgxViOyTyKtjh04708muTTNGHS58",
  authDomain: "coco-db-32d13.firebaseapp.com",
  projectId: "coco-db-32d13",
  storageBucket: "coco-db-32d13.appspot.com",
  messagingSenderId: "279533467034",
  appId: "1:279533467034:web:5ed8e8776ed6a9a0427623",
  measurementId: "G-X6LWFZNEJY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
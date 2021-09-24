import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDry7rVNpzwpZqWXAcSmljP4tMHP3-URYI",
  authDomain: "crwn-clothing-21822.firebaseapp.com",
  projectId: "crwn-clothing-21822",
  storageBucket: "crwn-clothing-21822.appspot.com",
  messagingSenderId: "696150621250",
  appId: "1:696150621250:web:4b887aba2cb8ef97cc81db",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

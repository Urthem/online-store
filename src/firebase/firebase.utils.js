import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDmr17Jq075lZ7yjj9dCVxSaLVubVw11uA",
  authDomain: "online-store-db-15cd0.firebaseapp.com",
  databaseURL: "https://online-store-db-15cd0.firebaseio.com",
  projectId: "online-store-db-15cd0",
  storageBucket: "online-store-db-15cd0.appspot.com",
  messagingSenderId: "979996581021",
  appId: "1:979996581021:web:c29341d51fd7a5171fc874",
  measurementId: "G-2N48X81Z2K",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

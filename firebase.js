import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBKyVW3PdwekEJ9jOpZ7k9fRMjSALD3Tyc",
  authDomain: "wassup2-6de5f.firebaseapp.com",
  projectId: "wassup2-6de5f",
  storageBucket: "wassup2-6de5f.appspot.com",
  messagingSenderId: "246026151894",
  appId: "1:246026151894:web:16f7f494d9e9c466ab2677",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
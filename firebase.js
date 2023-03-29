// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-f6513.firebaseapp.com",
  projectId: "twitter-f6513",
  storageBucket: "twitter-f6513.appspot.com",
  messagingSenderId: "1065689143671",
  appId: "1:1065689143671:web:8f9d6b0c51549047e1e972"
};

// Initialize Firebase
const app  = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore()
const storage = getStorage();
export { app, db, storage }
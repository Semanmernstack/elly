// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN7qVQBeIHdPF_1gNNZBY-fhjrfeiuFCM",
  authDomain: "elly-da87c.firebaseapp.com",
  projectId: "elly-da87c",
  storageBucket: "elly-da87c.appspot.com",
  messagingSenderId: "1072822945660",
  appId: "1:1072822945660:web:6ecaee89fe49fc684f06f9"
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const storage = getStorage(app)

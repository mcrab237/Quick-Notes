// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBce2r8Ya7DXv9gqXoyvm9Ilv_LUSwr4xg",
  authDomain: "quick-notes-1870b.firebaseapp.com",
  projectId: "quick-notes-1870b",
  storageBucket: "quick-notes-1870b.firebasestorage.app",
  messagingSenderId: "53335185270",
  appId: "1:53335185270:web:daf63b7f48e0f12dc48c57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;


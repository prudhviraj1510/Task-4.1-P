// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBvpOElCJwuOmXsaB-twuFM8246osbpXM",
  authDomain: "devlink-c142b.firebaseapp.com",
  projectId: "devlink-c142b",
  storageBucket: "devlink-c142b.appspot.com",
  messagingSenderId: "781234508893",
  appId: "1:781234508893:web:8f8b736917cdf1cf63a9b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
export {auth, db}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_R5a5UJnVqb3X4jlO36GXuoAEHsPBh2k",
  authDomain: "hitch-login-otp.firebaseapp.com",
  projectId: "hitch-login-otp",
  storageBucket: "hitch-login-otp.appspot.com",
  messagingSenderId: "626519143176",
  appId: "1:626519143176:web:2bf7a0b58a6a8b91bab2bd",
  measurementId: "G-TMNXFCK5YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt_Zpv0nSMP-ok6Xf3-huJSdayxpVPDR0",
  authDomain: "coffee-store-125.firebaseapp.com",
  projectId: "coffee-store-125",
  storageBucket: "coffee-store-125.firebasestorage.app",
  messagingSenderId: "554501040765",
  appId: "1:554501040765:web:92ba8cb4a26c1c25241f14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
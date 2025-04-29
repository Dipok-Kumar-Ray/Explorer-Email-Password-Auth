// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSsbNVIKVD7cDmU5yj2mVNx-b83lK_Lho",
  authDomain: "email-password-auth-a8842.firebaseapp.com",
  projectId: "email-password-auth-a8842",
  storageBucket: "email-password-auth-a8842.firebasestorage.app",
  messagingSenderId: "842684154957",
  appId: "1:842684154957:web:d837ebf3a900a80de34804"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
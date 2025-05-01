// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBSsbNVIKVD7cDmU5yj2mVNx-b83lK_Lho",
//   authDomain: "email-password-auth-a8842.firebaseapp.com",
//   projectId: "email-password-auth-a8842",
//   storageBucket: "email-password-auth-a8842.firebasestorage.app",
//   messagingSenderId: "842684154957",
//   appId: "1:842684154957:web:d837ebf3a900a80de34804"
// };

// // Initialize Firebase
//  const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service



// firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSsbNVIKVD7cDmU5yj2mVNx-b83lK_Lho",
  authDomain: "email-password-auth-a8842.firebaseapp.com",
  projectId: "email-password-auth-a8842",
  storageBucket: "email-password-auth-a8842.firebasestorage.app",
  messagingSenderId: "842684154957",
  appId: "email-password-auth-a8842.firebasestorage.app",
  // ... বাকি config
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

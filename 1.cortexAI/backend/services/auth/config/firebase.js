// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYbPAgmICw-fI-QLK9NThWsZNc8LGfgYE",
  authDomain: "projuct-46554.firebaseapp.com",
  projectId: "projuct-46554",
  storageBucket: "projuct-46554.firebasestorage.app",
  messagingSenderId: "413043827773",
  appId: "1:413043827773:web:3ad9d4d80272e0d4a07654",
  measurementId: "G-EKYS3W9YJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
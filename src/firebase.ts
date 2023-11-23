// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChwHJ3ZUVe3oUAHXcNBlYXCBmfX1tUaII",
  authDomain: "next-firebase-53f10.firebaseapp.com",
  projectId: "next-firebase-53f10",
  storageBucket: "next-firebase-53f10.appspot.com",
  messagingSenderId: "582031022594",
  appId: "1:582031022594:web:038f9f60c1afbaeda2e51b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
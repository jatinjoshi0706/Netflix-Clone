// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyASPSaZK0E-62JQS2O_cJ7oiSOS4Vuxqe8",
  authDomain: "netflix-clone-b4dd0.firebaseapp.com",
  projectId: "netflix-clone-b4dd0",
  storageBucket: "netflix-clone-b4dd0.appspot.com",
  messagingSenderId: "26315593345",
  appId: "1:26315593345:web:ca6d6a80a50eac2287df80",
  measurementId: "G-MBKZMZZ1PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
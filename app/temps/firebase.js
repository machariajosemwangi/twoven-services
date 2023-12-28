// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3rXp0G5v-bpzQYyVM6nlutbEp3Po0e7E",
  authDomain: "twoven-services.firebaseapp.com",
  projectId: "twoven-services",
  storageBucket: "twoven-services.appspot.com",
  messagingSenderId: "1049784711934",
  appId: "1:1049784711934:web:c38cf390aedd674c5d03af",
  measurementId: "G-L3HFQB75G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
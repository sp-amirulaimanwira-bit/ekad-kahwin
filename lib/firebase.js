// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgaAvwwZk6MFO5snuEHKO6nqS3CxhEfl4",
  authDomain: "ekad-kahwin.firebaseapp.com",
  projectId: "ekad-kahwin",
  storageBucket: "ekad-kahwin.firebasestorage.app",
  messagingSenderId: "88818094636",
  appId: "1:88818094636:web:e184d5a95422a4be857789",
  measurementId: "G-35XMNNE6LC"
};

// Singleton pattern untuk elakkan initialize banyak kali dalam Next.js
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// PASTIKAN ADA PERKATAAN 'export' DI SINI
export const db = getFirestore(app);
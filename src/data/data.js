// Import the functions you need from the SDKs you need
import 'dotenv/config'; 
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA55xgeeBRbLNsPd_IxzM8c8pJWQyb3bXI",
  authDomain: "project-5a75f.firebaseapp.com",
  projectId: "project-5a75f",
  storageBucket: "project-5a75f.firebasestorage.app",
  messagingSenderId: "55310636228",
  appId: "1:55310636228:web:28f46fd8abdb8502af2591",
  measurementId: "G-5ET31KGQX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore 
const db = getFirestore(app); 
 
export { db }; 
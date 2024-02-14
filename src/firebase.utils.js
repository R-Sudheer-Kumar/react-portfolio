// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAook0bJxS2SICak3FUwylxOTgpTZhntMo",
  authDomain: "rsk-portfolio-ab5bd.firebaseapp.com",
  projectId: "rsk-portfolio-ab5bd",
  storageBucket: "rsk-portfolio-ab5bd.appspot.com",
  messagingSenderId: "78059282102",
  appId: "1:78059282102:web:88f2b9a19f3c754a5d5017",
  measurementId: "G-YTMDVRBT9P"
};

export const sudheerImage = 'https://firebasestorage.googleapis.com/v0/b/rsk-portfolio-ab5bd.appspot.com/o/sudheerPhoto.jpg?alt=media&token=63191f1e-c1bd-499f-bb12-23b9a430f678';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
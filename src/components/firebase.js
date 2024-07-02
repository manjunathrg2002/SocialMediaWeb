// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApyYAK9VS9iJZvSvv-lTLvOF8wqZaXyQ0",
  authDomain: "ecommerce-4d57f.firebaseapp.com",
  projectId: "ecommerce-4d57f",
  storageBucket: "ecommerce-4d57f.appspot.com",
  messagingSenderId: "142905926479",
  appId: "1:142905926479:web:02da268572d82b04735b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;




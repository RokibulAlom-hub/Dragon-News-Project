// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtYkua6yDpzjejk-MjIQn13m2O27cgr2I",
  authDomain: "dragon-news-project-a7b0d.firebaseapp.com",
  projectId: "dragon-news-project-a7b0d",
  storageBucket: "dragon-news-project-a7b0d.firebasestorage.app",
  messagingSenderId: "363790747794",
  appId: "1:363790747794:web:dd5a1df27dbf412fa43e4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
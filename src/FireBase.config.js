// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBK4qziYFj-Kv6Gl2x1yMsA1KBWyn6pYQ",
  authDomain: "trabook-fb840.firebaseapp.com",
  projectId: "trabook-fb840",
  storageBucket: "trabook-fb840.firebasestorage.app",
  messagingSenderId: "539805866307",
  appId: "1:539805866307:web:e5cb486d9741a90d3df7f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
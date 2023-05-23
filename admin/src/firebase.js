// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmHKRdpOeKyqjH-wcM1V7sbp3WD9w2a5A",
  authDomain: "test-shop-2284b.firebaseapp.com",
  projectId: "test-shop-2284b",
  storageBucket: "test-shop-2284b.appspot.com",
  messagingSenderId: "800244728810",
  appId: "1:800244728810:web:6bc86335356df7b7f5e893",
  measurementId: "G-6P897H757Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;

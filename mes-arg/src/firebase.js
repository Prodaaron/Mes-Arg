// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxiDizhfWTxT-vpwfMntXTGIo7NHt8wFs",
  authDomain: "mes-arg.firebaseapp.com",
  projectId: "mes-arg",
  storageBucket: "mes-arg.firebasestorage.app",
  messagingSenderId: "460397745491",
  appId: "1:460397745491:web:b82e1b33fc7d9d0daabda6",
  measurementId: "G-ZQT3PXX83E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
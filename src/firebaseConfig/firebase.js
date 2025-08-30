// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnlDljAMivkQBoigrNVGxTK8Na51LFLHk",
  authDomain: "travel-agency-4baa6.firebaseapp.com",
  projectId: "travel-agency-4baa6",
  storageBucket: "travel-agency-4baa6.firebasestorage.app",
  messagingSenderId: "756089860465",
  appId: "1:756089860465:web:ca722cec3d9f0a789fc6d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw1Y9gNmSSBJMsOlq_cjTJKUH8iwDuoEQ",
  authDomain: "netflix-gptv.firebaseapp.com",
  projectId: "netflix-gptv",
  storageBucket: "netflix-gptv.appspot.com",
  messagingSenderId: "97758278871",
  appId: "1:97758278871:web:673f77b679605fa3016c92",
  measurementId: "G-LZ6KQ2Z0CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS2RswDN9lY8Mkx8Bk4j6Knv3vGFdowBg",
  authDomain: "netflix-gpt-d523b.firebaseapp.com",
  projectId: "netflix-gpt-d523b",
  storageBucket: "netflix-gpt-d523b.appspot.com",
  messagingSenderId: "201152876467",
  appId: "1:201152876467:web:d04b8a525ed1cc10e485c6",
  measurementId: "G-82KDP5446H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
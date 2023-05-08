
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC7S7exN8d_qPljBmFLudJfyxKRJ16oTdY",
  authDomain: "unique-you-us.firebaseapp.com",
  projectId: "unique-you-us",
  storageBucket: "unique-you-us.appspot.com",
  messagingSenderId: "923400426543",
  appId: "1:923400426543:web:85d4661e275f638db6e2da",
  measurementId: "G-C98FTHYS87"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCG9n172s09jHM7L4WqkjhjnCnp9kBvNGE",
  authDomain: "react-firebase-e20f4.firebaseapp.com",
  projectId: "react-firebase-e20f4",
  storageBucket: "react-firebase-e20f4.appspot.com",
  messagingSenderId: "349317239311",
  appId: "1:349317239311:web:df063fa914813fa06b097a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, auth, db, storage, analytics };

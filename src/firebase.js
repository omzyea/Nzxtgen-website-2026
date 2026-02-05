import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcLxk8WtYiwTcaqgcGb7s-9U2kH08VFw8",
  authDomain: "nextgen-c66ba.firebaseapp.com",
  projectId: "nextgen-c66ba",
  storageBucket: "nextgen-c66ba.firebasestorage.app",
  messagingSenderId: "277256911729",
  appId: "1:277256911729:web:0ea2b44b37cc5cd09dd4d0",
  measurementId: "G-94CTFQ08GQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
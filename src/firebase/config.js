import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcPn05G2ydsj_kOi-69Q6WFifJ2h738X4",
  authDomain: "fir-9-bd1ef.firebaseapp.com",
  projectId: "fir-9-bd1ef",
  storageBucket: "fir-9-bd1ef.appspot.com",
  messagingSenderId: "1025735008086",
  appId: "1:1025735008086:web:25dd158f53a11678e5c0f7",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };

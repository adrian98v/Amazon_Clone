import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDl2HZztK1_6aInHErRe1o9THGLLf1E6eI",
    authDomain: "challenge-e4edc.firebaseapp.com",
    projectId: "challenge-e4edc",
    storageBucket: "challenge-e4edc.appspot.com",
    messagingSenderId: "559773837460",
    appId: "1:559773837460:web:76cad58972b22e77ce6c81"
  };


  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const auth = getAuth(app);

  export {auth, db}
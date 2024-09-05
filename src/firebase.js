import { initializeApp } from 'firebase/app';
import {  getFirestore,  } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDvOfyEFY_kXYEtYBNRJIaBxnSKE0tOfRw",
    authDomain: "slack-clone-a041a.firebaseapp.com",
    projectId: "slack-clone-a041a",
    storageBucket: "slack-clone-a041a.appspot.com",
    messagingSenderId: "6213231932",
    appId: "1:6213231932:web:c428a28befb5f7c85a2a39"
  };

 const app = initializeApp(firebaseConfig)
 const db = getFirestore(app)
 const auth = getAuth(app)
 const provider = new GoogleAuthProvider()


  export {db, auth, provider}
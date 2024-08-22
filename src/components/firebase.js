// import {initializeApp} from 'firebase/app'
// import {getFirestore,collection,getDocs} from 'firebase/firestore/lite'
// import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
// import firebase from 'firebase'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyB0Vx4vmJXmefynDXdD_ikR2ZzknxGAHt0",
    authDomain: "linkedin-clone-90b54.firebaseapp.com",
    projectId: "linkedin-clone-90b54",
    storageBucket: "linkedin-clone-90b54.appspot.com",
    messagingSenderId: "456920268322",
    appId: "1:456920268322:web:33eb96ebb648794d89547b"
  };

  const firebaseApp=initializeApp(firebaseConfig)
  const db= getFirestore(firebaseApp);
  const auth=getAuth(firebaseApp);

  export {db,auth}
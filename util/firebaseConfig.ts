// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNegn1BQEgiwGZG07fZcF8-o-0eNoE-cQ",
  authDomain: "intern-task-fec17.firebaseapp.com",
  projectId: "intern-task-fec17",
  storageBucket: "intern-task-fec17.appspot.com",
  messagingSenderId: "638959056914",
  appId: "1:638959056914:web:2b21ba8762260ce4fac0cb",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }

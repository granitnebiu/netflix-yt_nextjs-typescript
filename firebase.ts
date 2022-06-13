// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZ6Y9T3Rznk_h3kqwVO3SVerWCE42ulFQ",
    authDomain: "netflix-clone-9c39d.firebaseapp.com",
    projectId: "netflix-clone-9c39d",
    storageBucket: "netflix-clone-9c39d.appspot.com",
    messagingSenderId: "879673501361",
    appId: "1:879673501361:web:5d45605d443a0d75a7a490"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
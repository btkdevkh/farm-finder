import { initializeApp } from "firebase/app"
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCsAw9TdCHh24rCP-yASy7V5XveXYidNUA",
  authDomain: "farm-finder-60f18.firebaseapp.com",
  projectId: "farm-finder-60f18",
  storageBucket: "farm-finder-60f18.appspot.com",
  messagingSenderId: "384294314225",
  appId: "1:384294314225:web:efea831a3b2771b1174950",
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()

export const colFarms = collection(db, "farms")
export const colProducts = collection(db, "products")

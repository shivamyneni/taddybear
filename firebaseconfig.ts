import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAx88rj9k1H8JhY1O8G8lUYKG1NRkqJFXE",
    authDomain: "taddybear-a743d.firebaseapp.com",
    projectId: "taddybear-a743d",
    storageBucket: "taddybear-a743d.appspot.com",
    messagingSenderId: "457830650214",
    appId: "1:457830650214:web:58d505de352791a16478a7",
    measurementId: "G-DM0D3L1EPQ"
  };

  const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { app, db }
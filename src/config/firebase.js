import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDXT9VhY9PYkvBEXgQwXByQZyK7JSXmX4w",
  authDomain: "clonetiktok-4b343.firebaseapp.com",
  projectId: "clonetiktok-4b343",
  storageBucket: "clonetiktok-4b343.appspot.com",
  messagingSenderId: "24370576221",
  appId: "1:24370576221:web:c91cc3e476a9a3c13906b4",
  measurementId: "G-81JCWXWVMS",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
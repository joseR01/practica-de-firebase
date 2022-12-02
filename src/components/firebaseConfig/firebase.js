import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDMG4qWPapB64lqxpOo7wodE-7eCe7_xAU",
  authDomain: "proyectotodo-a1484.firebaseapp.com",
  projectId: "proyectotodo-a1484",
  storageBucket: "proyectotodo-a1484.appspot.com",
  messagingSenderId: "520983803511",
  appId: "1:520983803511:web:f6aa65333766afb3a7f872"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
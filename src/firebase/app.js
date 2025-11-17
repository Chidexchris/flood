// src/firebase/useFirebase.js
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC2VTPo6HFQ95sNJqCLzT1kvS90hI8Javc",
  authDomain: "earlyfloodalertsystem.firebaseapp.com",
  databaseURL: "https://earlyfloodalertsystem-default-rtdb.firebaseio.com",
  projectId: "earlyfloodalertsystem",
  storageBucket: "earlyfloodalertsystem.firebasestorage.app",
  messagingSenderId: "872515673613",
  appId: "1:872515673613:web:d2ac5632517666308e7f44",
  measurementId: "G-1JS6SKK3WE",
};

const app = initializeApp(firebaseConfig);

export default function useFirebase(callback) {
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "flood_alert/station1");

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      callback(data);
    });

    return () => unsubscribe();
  }, [callback]);
}

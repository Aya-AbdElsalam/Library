import React, { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHxI2UdyThcXnvP6KKtN_w669HBIX-sCs",
  authDomain: "library-a04f4.firebaseapp.com",
  projectId: "library-a04f4",
  storageBucket: "library-a04f4.appspot.com",
  messagingSenderId: "333857831682",
  appId: "1:333857831682:web:4f610701224db667bde01b",
};

// Initialize Firebase outside the component to prevent re-initialization
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const AuthorsData = createContext();

export function AuthorsDataProvider({ children }) {
  const [Authors, setAuthors] = useState([]);

  useEffect(() => {
    const latestQuery = query(collection(db, "Authors"));
    onSnapshot(latestQuery, (snapshot) => {
      const authorsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAuthors(authorsData);
    });
  }, []);

  return (
    <AuthorsData.Provider value={{ Authors, setAuthors }}>
      {children}
    </AuthorsData.Provider>
  );
}

export default AuthorsDataProvider;

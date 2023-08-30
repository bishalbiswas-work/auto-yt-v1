import React from "react";
import DataContext from "./DataContext";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Pages/Auth/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const DataState = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onboarding, setonboarding] = useState({
    language: "",
    voice: "",
    price: "",
  });

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  const setonboardingLanguage = ({ language }) => {
    setonboarding((prevState) => ({
      ...prevState,
      language: language,
    }));
  };

  const setonboardingVoice = ({ voice }) => {
    setonboarding((prevState) => ({
      ...prevState,
      voice: voice,
    }));
  };

  const setonboardingPrice = ({ price }) => {
    setonboarding((prevState) => ({
      ...prevState,
      price: price,
    }));
  };
  // console.log(onboarding);
  // console.log("send onboarding data to firebase");
  const saveonboardingData = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userEmail = user.email;

      const saveToFirestore = async () => {
        const onboardingCollection = collection(db, "onboarding");

        try {
          const docRef = await addDoc(onboardingCollection, {
            ...onboarding,
            email: userEmail,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };

      saveToFirestore();
    } else {
      console.error("No user is signed in.");
    }
  };

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        onboarding,
        login,
        logout,
        setonboardingLanguage,
        setonboardingVoice,
        setonboardingPrice,
        saveonboardingData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;

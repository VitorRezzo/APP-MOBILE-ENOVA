import React, { useContext, useState, useEffect } from "react";
import { firestore, firebaseBD } from "../config/firebaseBD.js";

const GlobalUseContext = React.createContext();

export function useGlobalUse() {
  return useContext(GlobalUseContext);
}

export function GlobalUseProvider({ children }) {
  const [userLog, setUserLog] = useState("");

  const GetNomeUser = (uid) => {
    firestore
      .collection("USERS")
      .where("Id", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUserLog(doc.data().Nome);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  //função logar usuario com email e senha
  function fireauth(email, password, navigation) {
    firebaseBD
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorMessage);
      });
  }

  //verificar o estado de login
  function firestate(navigation) {
    firebaseBD.auth().onAuthStateChanged((user) => {
      if (user) {
        GetNomeUser(user.uid);
        navigation.navigate("Home");
      }
    });
  }

  //função fazer logout usuario
  function firesignout() {
    firebaseBD
      .auth()
      .signOut()
      .then(() => {
        console.log("logout com sucesso");
      })
      .catch((error) => {
        console.log(error, "falha logout");
      });
  }

  const value = {
    userLog,
    firestate,
    fireauth,
    firesignout,
  };

  return (
    <GlobalUseContext.Provider value={value}>
      {children}
    </GlobalUseContext.Provider>
  );
}

import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuhtProvider = ({ children }) => {

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

  const userInfo = {
    createUser,
    signInUser
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuhtProvider;

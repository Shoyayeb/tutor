import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  //   create user with email and password
  const createUserByEmail = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user)
      } else {
        setUser({})
      }
    });
  }, []);

  //   sign out
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        //   sign out successfully
      })
      .catch((error) => {
        //   error occurred
      });
  };

  return {
    user,
    createUserByEmail,
    signOutUser,
  };
};
export default useFirebase;

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState<[] | {} | null>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const auth: any = getAuth();

  //   create user with email and password
  const createUserByEmail = (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    setIsLoading(true);
    const name = firstName + " " + lastName;
    const avatar = firstName.charAt(0);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user created");
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: avatar,
        })
          .then(() => {
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login user with email and password
  const loginUserByEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  
  // managing user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //   sign out
  const signOutUser = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setError("");
        //   sign out successfully
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    setError,
    isLoading,
    createUserByEmail,
    signOutUser,
    loginUserByEmail,
  };
};
export default useFirebase;

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();
//  sets up a context for managing user authentication in the application

export const AuthContextProvider = ({ children }) => {

  //AuthContextProvider can access the current user's authentication data using the useContext(AuthContext) hook.
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {/* child components passed as props */}
      {children}
    </AuthContext.Provider>
  );
};

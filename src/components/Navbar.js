import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  // currentUser variable is extracted from the AuthContext using the useContext hook.
  // currentUser likely represents the currently authenticated user, 
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Ninjas Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="user_profile" />
        {/* including information such as display name and profile picture URL. */}
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;

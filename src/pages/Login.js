import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  // useNavigate hook from React Router DOM to get access to the navigate function,
  // which allows the component to navigate to different pages after successful login.

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      throw new Error("Oops! Something went wrong.");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ninja Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}> {/*   extracts the email and password values from the form inputs  */}
          <input type={"email"} placeholder={"Enter your E-mail"} />
          <input type={"password"} placeholder={"Enter your password"} />
          <button type="Submit">Sign in</button>

          {error && (
            <span style={{ color: "lightpink" }}>
              Oops! Something went wrong.
            </span>
          )}
        </form>
        <p>
          You don't have an account? <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
//Overall, this code represents a simple login form for the chat application. 
//It allows users to sign in with their email and password using Firebase Authentication

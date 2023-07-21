import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./style.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  //   useContext hook to access the currentUser data from the AuthContext file 
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => { // ProtectedRoute component is defined as a nested component within the App component.
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
     <BrowserRouter> {/*  provides the routing functionality to the application.*/}
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
         <Route path="login" element={<Login />} />  {/*  represents the Login page and maps it to the "/login" path. */}
        <Route path="register" element={<Register />} /> {/* represents the Register page and maps it to the "/register" path */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//this file sets up the application's routing logic using React Router.
//  The Home page is protected and can only be accessed by authenticated users


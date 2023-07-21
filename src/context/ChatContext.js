import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import { auth } from "../firebase";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
    // INITIAL_STATE constant is defined as an object with two properties: chatId initialized with the string "null" and
    // user initialized as an empty object. This will be the initial state of the chat context.
  };

  const chatReducer = (state, action) => {// handle state updates for the chat context
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
// Overall, this code sets up a context for managing chat-related data in the application.
//  The ChatContextProvider manages the state using the useReducer hook and 
//  the chatReducer function, making the chat state available to all child components wrapped by ChatContextProvider
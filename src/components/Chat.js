import React, { useContext, useEffect, useState } from "react";
import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

  // this component uses React hooks to manage state and retrieve data from the ChatContext


const Chat = () => {
  const { data } = useContext(ChatContext);

  // The useContext hook is used to access the data provided by the ChatContext. 
  // The data variable is destructured from the context, which likely holds relevant information about the user's chat session.

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;

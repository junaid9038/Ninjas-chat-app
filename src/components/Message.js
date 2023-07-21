import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  // this component takes a message object as a prop, which represents the data for an individual chat message.
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  // useRef hook to create a reference (ref) to a DOM element. 
  // In this case, it creates a reference to the outermost div element representing the chat message
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
// this Message component is responsible for rendering a single chat message with the appropriate sender's profile picture,
// timestamp, and message content

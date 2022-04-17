import { Button } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../context/appContext";
import { selectUser } from "../features/userSlice";
import Message from "./Message";

function MessageList({ messages }) {
  const user = useSelector(selectUser);
  const { privateMemberMessage } = useContext(AppContext);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // roomMessages[1]?.messagesByDate || roomMessages[0]?.messagesByDate ||

  const generateMessageProps = (message) => {
    const senderOrReceiver =
      message.from?._id === user._id ? "sender" : "receiver";
    return privateMemberMessage
      ? senderOrReceiver + " hideName"
      : senderOrReceiver;
  };

  return (
    <Container>
      <Messages>
        {messages.map((roomMessages) => {
          const { _id, messagesByDate } = roomMessages;
          return messagesByDate.map((message, i) => (
            <Message key={i} className={generateMessageProps(message)}>
              <h5>{message.from?.name}</h5>
              <p>{message.content}</p>
            </Message>
          ));
        })}
        <div ref={messagesEndRef} />
      </Messages>
    </Container>
  );
}

export default MessageList;

const Container = styled.div`
  margin-bottom: 15px;
`;

const Messages = styled.ul`
  height: 450px;
  margin: 24px auto 0 auto;
  padding: 0 20px 0 0;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;

  > div {
    float: left;
  }
  h5 {
    margin: 0;
  }

  &&& {
    p {
      font-size: 14px;
    }
  }
`;

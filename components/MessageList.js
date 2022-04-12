import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    console.log(messagesEndRef);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Container>
      <Messages>
        {messages.map((message, i) => (
          <Message key={i} className={message.isSender ? "sender" : "receiver"}>
            {message.content}
          </Message>
        ))}
        <div ref={messagesEndRef} />
      </Messages>
    </Container>
  );
}

export default MessageList;

const Container = styled.div`
  height: 400px;
  margin-bottom: 15px;
`;

const Messages = styled.ul`
  height: 400px;
  margin: 24px auto 0 auto;
  padding: 0 20px 0 0;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;

  > div {
    float: left;
  }
`;

const Message = styled.li`
  position: relative;
  clear: both;
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 280px;
  }

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 900px) and (max-width: 990px) {
    max-width: 350px;
  }

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
  }

  &.receiver {
    float: right;
    margin-right: 20px;
    color: white;
    background-color: #6e00ff;
  }

  &.receiver:after {
    border-top: 15px solid #6e00ff;
    border-right: 15px solid transparent;
    right: -15px;
  }

  &.sender {
    float: left;
    margin-left: 20px;
    background-color: rgba(25, 147, 147, 0.2);
  }

  &.sender:after {
    border-left: 15px solid transparent;
    left: -15px;
    border-top: 15px solid rgba(25, 147, 147, 0.2);
  }
`;

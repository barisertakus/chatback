import React, { useState } from "react";
import styled from "styled-components";
import ChatInfo from "./ChatInfo";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import WhiteBox from "./WhiteBox";

function Messages() {
  const [messages, setMessages] = useState([
    { isSender: true, content: "Are we meeting today?" },
    { isSender: false, content: "This is really nice!" },
    {
      isSender: false,
      content: "I was thinking about my new car, I bought it last year.",
    },
    { isSender: true, content: "Are we meeting today?" },
    { isSender: false, content: "This is really nice!" },
    { isSender: true, content: "Are we meeting today?" },
    { isSender: false, content: "This is really nice!" },
  ]);

  const sendMessage = (message) => {
    const checkOdd = messages.length % 2 === 0 ? false : true;
    setMessages([...messages, { isSender: checkOdd, content: message }]);
  };

  return (
    <WhiteBox>
      <Wrapper>
        <ChatInfo />
        <hr />
        <MessageList messages={messages} />
        <MessageInput sendMessage={sendMessage} />
      </Wrapper>
    </WhiteBox>
  );
}

export default Messages;

const Wrapper = styled.div`
  height: 580px;
  padding: 20px;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 12px;
  }
`;

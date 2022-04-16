import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../context/appContext";
import ChatInfo from "./ChatInfo";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import WhiteBox from "./WhiteBox";

function Messages() {
  // const [messages, setMessages] = useState([
  //   { isSender: true, content: "Are we meeting today?" },
  //   { isSender: false, content: "This is really nice!" },
  //   {
  //     isSender: false,
  //     content: "I was thinking about my new car, I bought it last year.",
  //   },
  //   { isSender: true, content: "Are we meeting today?" },
  //   { isSender: false, content: "This is really nice!" },
  //   { isSender: true, content: "Are we meeting today?" },
  //   { isSender: false, content: "This is really nice!" },
  //   { isSender: true, content: "Hello!" },
  //   { isSender: false, content: "Hi!" },
  // ]);

  const { socket, messages, setMessages } = useContext(AppContext);

  // const sendMessage = (message) => {
  //   const checkOdd = messages.length % 2 === 0 ? false : true;
  //   setMessages([...messages, { isSender: checkOdd, content: message }]);
  // };

  socket.off("room-messages").on("room-messages", (roomMessages) => {
    setMessages(roomMessages[0]?.messagesByDate || [])
    console.log("roommessages", roomMessages)
  })

  return (
    <WhiteBox>
      <Wrapper>
        <ChatInfo />
        <hr />
        <MessageList messages={messages} />
        <MessageInput />
      </Wrapper>
    </WhiteBox>
  );
}

export default Messages;

const Wrapper = styled.div`
  height: 630px;
  padding: 20px;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 12px;
  }
`;

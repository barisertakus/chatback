import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../context/appContext";
import ChatInfo from "./ChatInfo";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import WhiteBox from "./WhiteBox";
import Loading from "./Loading"

function Messages() {
  const { loading, roomName, socket, messages, setMessages, setLoading } =
    useContext(AppContext);

  socket.off("room-messages").on("room-messages", (roomMessages) => {
    setMessages(roomMessages); // TODO
    setLoading(false);
  });

  return (
    <WhiteBox>
      <Wrapper>
        {loading ? (
          <LoadingWrapper>
            <Loading className="loader">Loading...</Loading>
          </LoadingWrapper>
        ) : (
          <>
            <ChatInfo chatName={roomName} />
            <hr />
            <MessageList messages={messages} />
            <MessageInput />
          </>
        )}
      </Wrapper>
    </WhiteBox>
  );
}

export default Messages;

const Wrapper = styled.div`
  height: 640px;
  padding: 20px;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`;


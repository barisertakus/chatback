import React from "react";
import WhiteBox from "./WhiteBox";
import styled from "styled-components";
import MessageInput from "./MessageInput";
import ChatInfo from "./ChatInfo";
import MessageList from "./MessageList";

function Messages() {
  return (
    <WhiteBox>
      <Wrapper>
        <ChatInfo />
        <hr />
        <MessageList />
        <MessageInput />
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

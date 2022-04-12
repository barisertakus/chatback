import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Messages from "../components/Messages";

function Chat() {
  return (
    <Container>
      <Content>
        <Sidebar />
        <Messages />
      </Content>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  background-color: #eff6fc;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 0 20px;
`;

import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Messages from "../components/Messages";
import { Grid } from "@mui/material";

function Chat() {
  return (
    <Container>
      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12} xl={3} lg={4} md={5}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} xl={9} lg={8} md={7}>
            <Messages />
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  background-color: #eff6fc;
  height: 100%;
`;

const Content = styled.div`
  padding: 20px;
  background-color: #eff6fc;

  @media (max-width: 407px){
    padding: 7px;
  }
`;

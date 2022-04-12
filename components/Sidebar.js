import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import RoomList from "./lists/RoomList";
import WhiteBox from "./WhiteBox";

function Sidebar() {
  return (
    <Container>
      <RoomList />
      <RoomList />
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  flex: 0.4;
  min-width: 420px;
  max-width: 485px;
`;

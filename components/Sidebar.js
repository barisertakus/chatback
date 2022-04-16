import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import RoomList from "./lists/RoomList";
import Rooms from "./Rooms";
import WhiteBox from "./WhiteBox";
import Users from "./Users"

function Sidebar() {
  return (
    <Container>
      <Rooms />
      <Users />
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  height: 85vh;
`;

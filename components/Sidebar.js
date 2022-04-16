import React, { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../context/appContext";
import { selectUser } from "../features/userSlice";
import Rooms from "./Rooms";
import Users from "./Users";

function Sidebar() {
  const user = useSelector(selectUser);

  const { socket, setCurrentRoom, setPrivateMemberMessage } =
    useContext(AppContext);

  const joinRoom = (room, isPublic = true) => {
    if (!user) {
      return alert("You must login!");
    }

    socket.emit("join-room", room);
    setCurrentRoom(room);

    if (isPublic) {
      setPrivateMemberMessage(null);
    }
  };

  return (
    <Container>
      <Rooms joinRoom={joinRoom} />
      <Users joinRoom={joinRoom} />
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  height: 84vh;
`;

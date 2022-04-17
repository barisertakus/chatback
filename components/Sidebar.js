import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../context/appContext";
import {
  addNotifications,
  resetNotifications,
  selectUser,
} from "../features/userSlice";
import Rooms from "./Rooms";
import Users from "./Users";

function Sidebar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const {
    socket,
    currentRoom,
    setCurrentRoom,
    setPrivateMemberMessage,
    setRoomName,
    setLoading
  } = useContext(AppContext);

  const joinRoom = async (room, isPublic = true, roomName) => {
    if (!user) {
      return alert("You must login!");
    }
    
    setLoading(true);

    if (isPublic) {
      setPrivateMemberMessage(null);
      setRoomName(room);
    } else {
      setRoomName(roomName);
    }

    socket.emit("join-room", room, currentRoom);
    setCurrentRoom(room);

    dispatch(resetNotifications(room));
  };

  socket.off("notifications").on("notifications", (room) => {
    if (currentRoom != room) dispatch(addNotifications(room));
  });

  return (
    <Container>
      <Rooms joinRoom={joinRoom} />
      <Users joinRoom={joinRoom} />
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

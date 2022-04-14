import { Avatar } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../../context/appContext";
import { selectUser } from "../../features/userSlice";
import WhiteBox from "../WhiteBox";
import ListItem from "./ListItem";

function RoomList() {
  const user = useSelector(selectUser);

  const {
    socket,
    members,
    setMembers,
    currentRoom,
    setCurrentRoom,
    rooms,
    setRooms,
    privateMemberMessage,
    setPrivateMemberMessage,
  } = useContext(AppContext);
  
  socket.off("new-user").on("new-user", (payload) => {
    console.log(payload);
    setMembers(payload);
  });

  const getRooms = () => {
    fetch("http://localhost:4000/rooms")
      .then((res) => res.json())
      .then((data) => {
        console.log("rooms", data);
        setRooms(data);
      });
  };

  useEffect(() => {
    if (user) {
      setCurrentRoom("general");
      getRooms();
      socket.emit("join-room", "general");
      socket.emit("new-user");
    }
  }, []);

  return (
    <Container>
      <WhiteBox>
        <ListWrapper>
          <h3>Rooms</h3>
          <Rooms>
            <ListItem />
            <ListItem />
            <ListItem noHr />
          </Rooms>
        </ListWrapper>
      </WhiteBox>
    </Container>
  );
}

export default RoomList;

const Container = styled.div`
  margin-bottom: 20px;
`;

const ListWrapper = styled.div`
  padding: 20px;

  h3 {
    margin: 0;
  }
`;

const Rooms = styled.ul`
  list-style: none;
  padding: 0;

  p {
    margin: 0;
    font-size: 12px;
    color: gray;
  }
`;

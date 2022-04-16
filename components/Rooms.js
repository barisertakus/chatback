import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import { selectUser } from "../features/userSlice";
import ListItem from "./lists/ListItem";
import RoomList from "./lists/RoomList";

function Rooms() {
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
    <RoomList header="Rooms" length={4}>
      {rooms.map((room, i, { length }) => (
        <ListItem key={i} roomName={room} />
      ))}
    </RoomList>
  );
}

export default Rooms;

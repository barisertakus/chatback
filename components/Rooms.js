import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import { selectUser } from "../features/userSlice";
import ListItem from "./lists/ListItem";
import RoomList from "./lists/RoomList";

function Rooms({ joinRoom }) {
  const user = useSelector(selectUser);

  const { socket, currentRoom, setCurrentRoom, rooms, setRooms } =
    useContext(AppContext);

  useEffect(() => {
    if (user) {
      // const roomSelect = currentRoom || "general"
      setCurrentRoom("general");
      // getRooms();
      socket.emit("join-room", "general");
      socket.emit("new-user");
    }
  }, []);

  return (
    <RoomList header="Rooms" length={3}>
      {rooms.map((room, i, { length }) => (
        <ListItem
          key={i}
          roomName={room}
          handleClick={() => joinRoom(room)}
          active={room === currentRoom}
        />
      ))}
    </RoomList>
  );
}

export default Rooms;

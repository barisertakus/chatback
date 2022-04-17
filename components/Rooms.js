import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import { selectUser } from "../features/userSlice";
import ListItem from "./lists/ListItem";
import RoomList from "./lists/RoomList";

function Rooms({ joinRoom }) {
  const user = useSelector(selectUser);

  const { socket, currentRoom, setCurrentRoom, setRoomName, rooms } =
    useContext(AppContext);

  const handleClick = (room) => {
    joinRoom(room);
    setRoomName(room);
  }

  useEffect(() => {
    if (user) {
      // const roomSelect = currentRoom || "general"
      setCurrentRoom("general");
      setRoomName("general");
      // getRooms();
      socket.emit("join-room", "general");
      socket.emit("new-user");
    }
  }, []);

  return (
    <RoomList header="Rooms" length={3}>
      {rooms.map((room, i, { length }) => {
        return (
          <ListItem
            key={i}
            roomName={room}
            handleClick={() => handleClick(room)}
            active={room === currentRoom}
            newMessages={user?.newMessages?.[room] || 0}
          />
        );
      })}
    </RoomList>
  );
}

export default Rooms;

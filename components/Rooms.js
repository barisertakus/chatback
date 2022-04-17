import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import { selectUser } from "../features/userSlice";
import ListItem from "./lists/ListItem";
import RoomList from "./lists/RoomList";

function Rooms({ joinRoom }) {
  const user = useSelector(selectUser);

  const {
    socket,
    currentRoom,
    setCurrentRoom,
    setRoomName,
    rooms,
    setImageUrl,
  } = useContext(AppContext);

  const handleClick = (room) => {
    joinRoom(room.name, room.imageUrl);
  };

  useEffect(() => {
    if (user && rooms?.length > 0) {
      // const roomSelect = currentRoom || "general"
      const { name, imageUrl } = rooms[0];
      setCurrentRoom(name);
      setRoomName(name);
      setImageUrl(imageUrl);
      // getRooms();
      socket.emit("join-room", name);
      socket.emit("new-user");
    }
  }, [rooms]);

  return (
    <RoomList header="Rooms" length={3}>
      {rooms.map((room, i) => {
        const length = user?.newMessages?.[room]?.length;
        const lastMessage = user?.newMessages?.[room]?.[length - 1].content;
        return (
          <ListItem
            key={i}
            roomName={room.name}
            pictureUrl={room.imageUrl}
            handleClick={() => handleClick(room)}
            active={room === currentRoom}
            newMessages={length || 0}
            lastMessage={lastMessage || ""}
          />
        );
      })}
    </RoomList>
  );
}

export default Rooms;

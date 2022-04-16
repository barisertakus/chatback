import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import { selectUser } from "../features/userSlice";
import ListItem from "./lists/ListItem";
import RoomList from "./lists/RoomList";

function Users() {
  const user = useSelector(selectUser);

  const {
    socket,
    members,
    setMembers,
    privateMemberMessage,
    setPrivateMemberMessage,
  } = useContext(AppContext);

  socket.off("new-user").on("new-user", (payload) => {
    console.log(payload);
    setMembers(payload);
  });

  return (
    <RoomList header="Users" length={5}>
      {members.map((member, i, { length }) => (
        <>
        
        <ListItem key={i} roomName={member.name} />
        <ListItem key={i} roomName={member.name} />
        </>

        
      ))}
    </RoomList>
  );
}

export default Users;

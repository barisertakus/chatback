import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import { selectUser } from "../features/userSlice";
import { generatePrivateChatId } from "../utils/chatUtils";
import ListItem from "./lists/ListItem";
import RoomList from "./lists/RoomList";

function Users({joinRoom}) {
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

  const handleMemberMessage = (member) => {
    setPrivateMemberMessage(member);
    const roomId = generatePrivateChatId(user._id, member._id);
    joinRoom(roomId, false);
  };

  return (
    <RoomList header="Users" length={5}>
      {members.map((member) => (
        <ListItem
          key={member._id}
          roomName={member.name}
          active={member._id === privateMemberMessage?._id}
          handleClick={() => handleMemberMessage(member)}
        />
      ))}
    </RoomList>
  );
}

export default Users;

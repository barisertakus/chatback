import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import { selectUser } from "../features/userSlice";
import { generatePrivateChatId } from "../utils/chatUtils";
import ListItem from "./lists/ListItem";
import RoomList from "./lists/RoomList";

function Users({ joinRoom }) {
  const user = useSelector(selectUser);

  const {
    socket,
    members,
    setMembers,
    privateMemberMessage,
    setPrivateMemberMessage,
  } = useContext(AppContext);

  socket.off("new-user").on("new-user", (payload) => {
    setMembers(payload);
  });

  const handleMemberMessage = async (member) => {

    const roomId = generatePrivateChatId(user._id, member._id);
    setPrivateMemberMessage(member);
    joinRoom(roomId, false, member.name);

  };

  return (
    <RoomList header="Users" length={5}>
      {members.map((member) => (
        <ListItem
          key={member._id}
          roomName={member.name}
          active={member._id === privateMemberMessage?._id}
          handleClick={() => handleMemberMessage(member)}
          newMessages={
            user?.newMessages?.[generatePrivateChatId(user._id, member._id)] ||
            0
          }
        />
      ))}
    </RoomList>
  );
}

export default Users;

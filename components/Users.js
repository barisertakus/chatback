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
    const { name, picture } = member;
    joinRoom(roomId, picture, name, false);
  };

  return (
    <RoomList header="Users" length={5}>
      {members.map((member) => {
        const checkId = generatePrivateChatId(user._id, member._id);
        const length = user?.newMessages?.[checkId]?.length || 0
        const lastMessage = user?.newMessages?.[checkId]?.[length - 1].content || "";

        return (
          <ListItem
            key={member._id}
            pictureUrl={member.picture}
            roomName={member.name}
            active={member._id === privateMemberMessage?._id}
            handleClick={() => handleMemberMessage(member)}
            newMessages={length}
            lastMessage={lastMessage}
          />
        );
      })}
    </RoomList>
  );
}

export default Users;

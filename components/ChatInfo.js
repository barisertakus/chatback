import React, { useContext } from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/CallOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { AppContext } from "../context/appContext";

function ChatInfo() {
  const { roomName, imageUrl } = useContext(AppContext);

  return (
    <Container>
      <ChatHeader>
        <Avatar src={imageUrl} />
        <ProfileInfo>
          <h3>{roomName}</h3>
          <p>Last seen 2:02pm</p>
        </ProfileInfo>
      </ChatHeader>

      <ChatIcons>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton>
          <VideoCallOutlinedIcon />
        </IconButton>
        <IconButton>
          <MoreVertOutlinedIcon />
        </IconButton>
      </ChatIcons>
    </Container>
  );
}

export default ChatInfo;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileInfo = styled.div`
  margin-left: 15px;
`;

const ChatIcons = styled.div`
  svg {
    color: blueviolet;
  }
`;

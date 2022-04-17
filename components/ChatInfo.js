import React from "react";
import styled from "styled-components"
import { Avatar, IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/CallOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";


function ChatInfo({chatName}) {
  return (
    <Container>
      <ChatHeader>
        <Avatar />
        <ProfileInfo>
          <h3>{chatName}</h3>
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
`;

const ProfileInfo = styled.div`
  margin-left: 15px;
`;

const ChatIcons = styled.div`
  svg {
    color: blueviolet;
  }
`;

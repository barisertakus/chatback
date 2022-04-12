import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";
import styled from "styled-components";
function MessageInput({ sendMessage }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handlePress = (e) => {
    e.key === "Enter" && clearAndSend();
  };

  const clearInput = () => {
    setMessage("");
  }

  const clearAndSend = () => {
    sendMessage(message);
    clearInput();
  }

  return (
    <Container>
      <InputBox>
        <RotatedIconButton>
          <AttachFileIcon />
        </RotatedIconButton>
        <Input
          value={message}
          onChange={handleChange}
          placeholder="Type your message..."
          onKeyPress={handlePress}
        />
        <IconButton>
          <SentimentVerySatisfiedOutlinedIcon />
        </IconButton>
        <IconButton>
          <CameraAltOutlinedIcon />
        </IconButton>
      </InputBox>
      <BigIcon className="bigIcon">
        <StyledMicIcon />
      </BigIcon>
    </Container>
  );
}

export default MessageInput;

const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 407px){
    margin-left: -9px;

    .bigIcon {
      margin-left: 5px;
    }

    .bigIcon > svg {
      font-size: 22px;
    }
  }
`;

const InputBox = styled.div`
  display: flex;
  flex: 1;
  border-radius: 15px;
  background-color: #eff6fc;
  padding: 5px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`;

const RotatedIconButton = styled(IconButton)`
  transform: rotate(45deg);
`;

const BigIcon = styled(IconButton)`
  background-color: #6e00ff;
  border-radius: 10px;

  margin-left: 10px;

  &:hover {
    > svg > path {
      color: #6e00ff;
    }

    background-color: #c7cedb;
  }
`;

const StyledMicIcon = styled(MicIcon)`
  font-size: 28px;
  > path {
    color: white;
  }
`;

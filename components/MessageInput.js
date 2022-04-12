import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import { IconButton } from "@mui/material";
import styled from "styled-components";
function MessageInput() {
  return (
    <Container>
      <InputBox>
        <RotatedIconButton>
          <AttachFileIcon />
        </RotatedIconButton>
        <Input placeholder="Type your message..." />
        <IconButton>
          <SentimentVerySatisfiedOutlinedIcon />
        </IconButton>
        <IconButton>
          <CameraAltOutlinedIcon />
        </IconButton>
      </InputBox>
      <BigIcon>
        <StyledMicIcon />
      </BigIcon>
    </Container>
  );
}

export default MessageInput;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  flex: 1;
  border-radius: 15px;
  background-color: #eff6fc;
  padding: 5px;
  margin-right: 20px;
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

  &:hover {
    > svg > path {
      color: #6e00ff;
    }

    background-color: #c7cedb;
  }
`;

const StyledMicIcon = styled(MicNoneOutlinedIcon)`
  font-size: 28px;
  > path {
    color: white;
  }
`;

import { Avatar, Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

function ListItem({ roomName, handleClick, active, newMessages, lastMessage, pictureUrl, privateChat }) {
  // console.log(roomName, active)
  return (
    <Container>
      <Item onClick={handleClick} {...(active ? { className: "active" } : {})}>
        <RoomInfo>
          <Avatar  src={pictureUrl}  />
          <RoomHeader>
            <h5>{roomName}</h5>
            <p>{lastMessage}</p>
          </RoomHeader>
        </RoomInfo>

        <TimeInfo>
          <p>Today, 9:52PM</p>
          {!active && <StyledBadge badgeContent={newMessages} color="primary" /> }
        </TimeInfo>
      </Item>
    </Container>
  );
}

export default ListItem;

const Container = styled.li`
  :hover {
    background-color: #f0eded;
    border-radius: 10px;
    cursor: pointer;
  }

  hr {
    margin: 0 5px;
    border-top: 1px solid #b4abab;
  }
`;

const Item = styled.div`
  &.active {
    background-color: #d3d3d3;
    border-radius: 10px;
  }
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
`;

const RoomInfo = styled.div`
  display: flex;
  align-items: center;
`;

const RoomHeader = styled.div`
  margin-left: 20px;
  > h5 {
    margin: 0 0 5px 0;
    font-weight: bold;
  }
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledBadge = styled(Badge)`
  right: 10px;
  bottom: 5px;
`

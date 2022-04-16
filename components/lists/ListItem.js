import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

function ListItem({ roomName, handleClick, active }) {
  // console.log(roomName, active)
  return (
    <Container>
      <Item onClick={handleClick} {...(active ? {className: 'active'} : {})}>
        <RoomInfo>
          <Avatar />
          <RoomHeader>
            <h5>{roomName}</h5>
            <p>First Message</p>
          </RoomHeader>
        </RoomInfo>

        <TimeInfo>
          <p>Today, 9:52PM</p>
        </TimeInfo>
      </Item>
    </Container>
  );
}

export default ListItem;

const Container = styled.li`
  :hover{
    background-color: #f0eded;
    border-radius: 10px;
    cursor: pointer;
  }

  hr {
    margin: 0 5px;
    border-top: 1px solid #B4ABAB;
  }
`;

const Item = styled.div`
  &.active{
    background-color : #d3d3d3;
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

const TimeInfo = styled.div``;

import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

function ListItem({ noHr }) {
  return (
    <Container>
      <Item>
        <RoomInfo>
          <Avatar />
          <RoomHeader>
            <h5>My Friends</h5>
            <p>First Message</p>
          </RoomHeader>
        </RoomInfo>

        <TimeInfo>
          <p>Today, 9:52PM</p>
        </TimeInfo>
      </Item>
      <hr style={ noHr && { display: "none" }} />
    </Container>
  );
}

export default ListItem;

const Container = styled.li`
  :hover{
    background-color: #F7EBE8;
    border-radius: 10px;
    cursor: pointer;
  }

  hr {
    margin: 0 5px;
    border-top: 1px solid #B4ABAB;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const RoomInfo = styled.div`
  display: flex;
  align-items: center;
`;

const RoomHeader = styled.div`
  margin-left: 20px;

  > h5 {
    margin: 0;
    font-weight: bold;
  }
`;

const TimeInfo = styled.div``;

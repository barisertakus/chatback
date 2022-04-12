import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import WhiteBox from "../WhiteBox";
import ListItem from "./ListItem";

function RoomList() {
  return (
    <Container>
      <WhiteBox>
        <ListWrapper>
          <h3>Rooms</h3>
          <Rooms>
            <ListItem />
            <ListItem />
            <ListItem noHr />
          </Rooms>
        </ListWrapper>
      </WhiteBox>
    </Container>
  );
}

export default RoomList;

const Container = styled.div`
  margin-bottom: 20px;
`;

const ListWrapper = styled.div`
  padding: 20px;

  h3 {
    margin: 0;
  }
`;

const Rooms = styled.ul`
  list-style: none;
  padding: 0;

  p {
    margin: 0;
    font-size: 12px;
    color: gray;
  }
`;

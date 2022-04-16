import { Avatar } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppContext } from "../../context/appContext";
import { selectUser } from "../../features/userSlice";
import WhiteBox from "../WhiteBox";
import ListItem from "./ListItem";

function RoomList({ header, children, length }) {
  return (
    <Container>
      <WhiteBox>
        <ListWrapper length={(length * 60 + 65) + "px"}>
          <h3>{header}</h3>
          <Rooms>{children}</Rooms>
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
  height: ${props => props.length};

  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

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

import { Grid } from "@mui/material";
import Router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Loading from "../components/Loading";
import Messages from "../components/Messages";
import Sidebar from "../components/Sidebar";
import { AppContext } from "../context/appContext";
import { URL } from "../environment";
import { selectUser } from "../features/userSlice";

function Chat({ rooms }) {
  const { setRooms, loading } = useContext(AppContext);
  const [checkUser, setCheckUser] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    setRooms(rooms);
  }, [rooms, setRooms]);

  useEffect(() => {
    if (!user?._id) {
      Router.push("/login").then(()=>{
        setCheckUser(true);
      });
    } else {
      setCheckUser(true);
    }

  }, []);

  return (
    <Container>
      {!checkUser || loading ? (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      ) : (
        <Content>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={3} lg={4} md={5}>
              <Sidebar />
            </Grid>
            <Grid item xs={12} xl={9} lg={8} md={7}>
              <Messages />
            </Grid>
          </Grid>
        </Content>
      )}
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  background-color: #eff6fc;
  height: 100%;
`;

const Content = styled.div`
  padding: 20px;
  background-color: #eff6fc;

  @media (max-width: 407px) {
    padding: 7px;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const getStaticProps = async () => {
  const res = await fetch(`${URL}/rooms`);

  const rooms = await res.json();

  return {
    props: {
      rooms,
    },
  };
};

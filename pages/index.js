import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Chat } from "@mui/icons-material";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ChatBack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <Container>
          <LogoWrapper>
            <Logo
              src="/assets/chatback-cover.png"
              width="430"
              height="180"
              alt="cover"
            />
          </LogoWrapper>

          <Welcome>
            <Header> ChatBack for Messaging </Header>
            <SubHeader>Realtime chat with your friends</SubHeader>
            <Button variant="contained" endIcon={<Chat />}>
              Get Started
            </Button>
          </Welcome>
        </Container>
      </div>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 80px);
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin-right: 20px;
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(Image)`
  border-radius: 20px;
`;

const Header = styled.h1`
  font-size: 35px;
  margin-bottom: 0;
`;

const SubHeader = styled.h3`
  color: gray;
`;

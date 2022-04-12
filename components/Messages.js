import React from "react";
import WhiteBox from "./WhiteBox";
import styled from "styled-components";

function Messages() {
  return (
    <Container>
      <WhiteBox>
        <Wrapper>
          <h3>Messages</h3>
        </Wrapper>
      </WhiteBox>
    </Container>
  );
}

export default Messages;

const Container = styled.div`
  flex: 1;
  margin-left: 10px;
  min-width: 420px;
`;

const Wrapper = styled.div`
  height: 580px;
  padding: 20px;

  h3{
    margin: 0;
  }
`;

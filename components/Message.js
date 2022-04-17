import styled from "styled-components";

export default styled.li`
  position: relative;
  clear: both;
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 280px;
  }

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 900px) and (max-width: 990px) {
    max-width: 350px;
  }
  
  &.hideName {
    h5{
      display: none
    }
  }

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    top: 10px;
  }

  &.receiver {
    float: right;
    margin-right: 20px;
    color: white;
    background-color: #6e00ff;
  }

  &.receiver:after {
    border-top: 15px solid #6e00ff;
    border-right: 15px solid transparent;
    right: -15px;
  }

  &.sender {
    float: left;
    margin-left: 20px;
    background-color: rgba(25, 147, 147, 0.2);
  }

  &.sender:after {
    border-left: 15px solid transparent;
    left: -15px;
    border-top: 15px solid rgba(25, 147, 147, 0.2);
  }
`;

import React from "react";
import styled from "styled-components";
import Form from "./Form";

function Header() {
  return (
    <HeaderStyled>
      <div>What's your TODO</div>
      <Form />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  color: #fa86c1;
  position: relative;
  width: 99%;
  height: 170px;
  border: 6px solid #fa86c1;
  box-shadow: 0px 0px 12px 3px #fa86c1, inset 0px 0px 6px 3px #fa86c1;
  border-radius: 25px;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  div {
    font-size: 2.3rem;
    letter-spacing: 0.3rem;
    font-weight: 600;
    text-align: center;
    text-shadow: 0px 0px 16px #fa86c1;
  }

  @media screen and (max-width: 1050px) {
    height: 220px;
  }
`;

export default Header;

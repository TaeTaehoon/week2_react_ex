import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

const LayoutStyled = styled.div`
  width: 1200px;
  max-width: 97%;
  min-width: 800px;
  min-height: 100vh;
  height: 100%;
  background-color: #122138;
  margin: 0 auto;
  margin-top: 20px;
`;

export default Layout;

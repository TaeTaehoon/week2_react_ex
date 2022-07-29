import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

const LayoutStyled = styled.div`
  width: 1200px;
  max-width: 95%;
  min-width: 800px;

  background-color: #eee;
  margin: 0 auto;
`;

export default Layout;

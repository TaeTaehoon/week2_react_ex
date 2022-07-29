import React from "react";
import styled from "styled-components";
import TodoCard from "./TodoCard";

function Contents({ children }) {
  return (
    <WrapStyled>
      <h1>오늘도 달려봐요!</h1>
      <CardListStyled>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </CardListStyled>
      <h1>수고하셨습니다!</h1>
      <CardListStyled>
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </CardListStyled>
    </WrapStyled>
  );
}

const WrapStyled = styled.div`
  width: 100%;
  padding: 0 21px 21px 21px;
  display: flex;
  flex-direction: column;
  h1 {
    letter-spacing: 0.2rem;
  }
`;
const CardListStyled = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export default Contents;

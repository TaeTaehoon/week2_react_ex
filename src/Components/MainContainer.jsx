import React from "react";
import styled from "styled-components";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

function Contents({ children }) {
  const test = useSelector((state) => state);
  console.log(test);
  const todoList = useSelector((state) => state.todoAction.list); // 추가해주세요.
  return (
    <WrapStyled>
      <h1>오늘도 달려봐요!</h1>
      <CardListStyled>
        {todoList.map((todo) => {
          if (todo.isDone === false) {
            return (
              <TodoCard
                todo={todo}
                key={todo.id}
                title={todo.title}
                desc={todo.description}
                isDone={todo.isDone}
              />
            );
          }
          return null;
        })}
      </CardListStyled>
      <h1>수고하셨습니다!</h1>
      <CardListStyled>
        {todoList.map((todo) => {
          if (todo.isDone === true) {
            return (
              <TodoCard
                todo={todo}
                key={todo.id}
                title={todo.title}
                desc={todo.description}
                isDone={todo.isDone}
              />
            );
          }
          return null;
        })}
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
    color: yellow;
    text-shadow: 0px 0px 16px yellow;
    letter-spacing: 0.2rem;
  }
`;
const CardListStyled = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  padding-bottom: 15px;
`;

export default Contents;

import React from "react";
import styled from "styled-components";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

function Contents({ children }) {
  const todoList = useSelector((state) => state.todoAction.list); // 추가해주세요.
  console.log(todoList);
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
    letter-spacing: 0.2rem;
  }
`;
const CardListStyled = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export default Contents;

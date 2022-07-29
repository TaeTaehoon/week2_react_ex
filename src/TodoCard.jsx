import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleTodo, deleteTodo } from "./Redux/modules/todos";

function TodoCard(props) {
  const removeBtn = useRef();
  const toggleBtn = useRef();
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch(deleteTodo(props.todo));
  };
  const toggleEvent = () => {
    dispatch(toggleTodo(props.todo));
  };
  useEffect(() => {
    removeBtn.current.addEventListener("click", removeTodo);
    toggleBtn.current.addEventListener("click", toggleEvent);
    return () => {
      if (removeBtn.current !== null || toggleBtn.current !== null) {
        removeBtn.current.removeEventListener("click", removeTodo);
        toggleBtn.current.removeEventListener("click", toggleEvent);
      }
    };
  });
  return (
    <CardStyled>
      <button>+</button>
      <h3>{props.title}</h3>
      <span>{props.desc}</span>
      <button ref={removeBtn}>삭제</button>
      <button ref={toggleBtn}>{props.isDone ? "취소" : "완료"}</button>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  background-color: #fff;
  border-radius: 15px;
  border: 3.8px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  button:nth-of-type(1) {
    top: -8px;
    right: -8px;
    position: absolute;
    border-radius: 50%;
  }
  h3 {
    width: 95%;
    border-bottom: 2px solid #eee;
    text-align: center;
    padding-bottom: 5px;
  }

  span {
    display: inline-block;
    width: 95%;
    height: 100px;
    background-color: red;
  }
`;

export default TodoCard;

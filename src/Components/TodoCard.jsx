import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleTodo, deleteTodo } from "../Redux/modules/todos";
import { Link } from "react-router-dom";

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
      <Link to={`/detail/${props.todo.id}`}>
        <button>+</button>
      </Link>

      <h3>{props.title}</h3>
      <span>{props.desc}</span>
      <div>
        <button ref={removeBtn}>삭제</button>
        <button ref={toggleBtn}>{props.isDone ? "취소" : "완료"}</button>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  background-color: #122138;
  border-radius: 15px;
  border: 3.8px solid #8ac1e7;
  box-shadow: 0px 0px 12px 3px #8ac1e7, inset 0px 0px 6px 3px #8ac1e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    top: -8px;
    right: -8px;
    position: absolute;

    button {
      font-family: monospace;
      width: 30px;
      padding: 0;
      height: 30px;
      font-size: 20px;
      color: #8ac1e7;
      background-color: #122138;
      border: 3.8px solid #8ac1e7;
      box-shadow: 0px 0px 6px 2px #8ac1e7, inset 0px 0px 3.5px 1px #8ac1e7;
      border-radius: 50%;
      border: 3.8px solid #8ac1e7;
      cursor: pointer;

      :focus {
        transform: scale(0.96);
      }
    }
  }
  h3 {
    width: 90%;
    color: #fa86c1;
    border-bottom: 2px solid #8ac1e7;
    text-align: center;
    padding-bottom: 5px;
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    margin: 0;
    padding: 15px 0 10px 0;
  }

  span {
    padding-top: 10px;
    display: inline-block;
    width: 90%;
    color: #fa86c1;
    height: 100px;
    font-size: 1.2rem;
    background: none;
  }

  div {
    button {
      margin-top: 8px;
      width: 70px;
      height: 30px;
      border: 3px solid #fa86c1;
      border-radius: 8px;
      background: none;
      color: #fa86c1;
      box-shadow: 0px 0px 10px 2px #fa86c1, inset 0px 0px 5px 2px #fa86c1;
      cursor: pointer;
      :focus {
        transform: scale(0.96);
      }
      :nth-of-type(1) {
        margin-right: 10px;
      }
      :nth-of-type(2) {
        margin-left: 10px;
      }
    }
  }
`;

export default TodoCard;

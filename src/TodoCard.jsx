import React from "react";
import styled from "styled-components";

function TodoCard() {
  return (
    <CardStyled>
      <h3>제목</h3>
      <span>내용</span>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 220px;
  height: 220px;
  background-color: #fff;
  border-radius: 15px;
  border: 3.8px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    width: 95%;
    border-bottom: 2px solid #eee;
    text-align: center;
    padding-bottom: 5px;
  }

  span {
    display: inline-block;
    width: 95%;
    height: 140px;
    background-color: red;
  }
`;

export default TodoCard;

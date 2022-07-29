import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderStyled>
      <div>What's your TODO</div>
      <SubmitFormStyled>
        <label>제목</label>
        <input />
        <label>내용</label>
        <input />
        <button>드가자~!</button>
      </SubmitFormStyled>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  height: 170px;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  div {
    font-size: 2rem;
    text-align: center;
  }
`;

const SubmitFormStyled = styled.form`
  label {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    padding: 0 0 0 20px;
  }
  input {
    font-size: 1.8rem;
    width: 15rem;
    margin-left: 10px;
    border: none;
    background-color: beige;
    border-bottom: 2px solid pink;
    box-shadow: 0px 6px 7px -5.5px pink;

    :focus {
      outline: none;
    }
  }

  button {
    position: absolute;
    right: 20px;
    width: 220px;
    font-size: 1.5rem;
    padding: 5px 10px;
    border: 3px solid pink;
    border-radius: 10px;
    font-weight: bold;
    color: pink;
    background: none;
    box-shadow: 0px 0px 4px 1px pink;
  }
`;
export default Header;

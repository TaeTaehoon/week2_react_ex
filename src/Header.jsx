import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTodo } from "./Redux/modules/todos";

function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    desc: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    //구조분해 할당을 통해 e.target.name과 e.target.value값을 가져와서 객체형태로 저장
    setInput({ ...input, [name]: value });
  }; //todos에 넣기 위해 input 두개의 값을 묶어서 inputs의 [name]과 key가 같은 요소에 value를 대입시킴.

  const formRef = useRef(null);
  const submitAction = (e) => {
    e.preventDefault();
    dispatch(createTodo(input));

    setInput({ title: "", desc: "" });
  };

  useEffect(() => {
    formRef.current.addEventListener("submit", submitAction);
    return () => {
      if (formRef.current !== null) {
        formRef.current.removeEventListener("submit", submitAction);
      }
    };
  });

  return (
    <HeaderStyled>
      <div>What's your TODO</div>
      <SubmitFormStyled ref={formRef}>
        <label>제목</label>
        <input
          type="text"
          onChange={onChange}
          name="title"
          value={input.title}
          required
        />
        <label>내용</label>
        <input
          type="text"
          onChange={onChange}
          name="desc"
          value={input.desc}
          required
        />
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

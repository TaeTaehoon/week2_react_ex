import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTodo } from "../Redux/modules/todos";

function Form() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    desc: "",
  });
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
    },
    [input]
  );
  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   //구조분해 할당을 통해 e.target.name과 e.target.value값을 가져와서 객체형태로 저장
  //   setInput({ ...input, [name]: value });
  // }; //todos에 넣기 위해 input 두개의 값을 묶어서 inputs의 [name]과 key가 같은 요소에 value를 대입시킴.

  const formRef = useRef(null);

  const submitAction = (e) => {
    e.preventDefault();
    dispatch(createTodo(input));

    setInput({ title: "", desc: "" });
  };

  useEffect(() => {
    const submitForm = formRef.current;
    submitForm.addEventListener("submit", submitAction);
    return () => {
      submitForm?.removeEventListener("submit", submitAction);
    };
  });
  return (
    <SubmitFormStyled ref={formRef}>
      <label>Title</label>
      <input
        type="text"
        onChange={onChange}
        name="title"
        value={input.title}
        required
      />
      <label>Description</label>
      <input
        type="text"
        onChange={onChange}
        name="desc"
        value={input.desc}
        required
      />
      <button>Commit!</button>
    </SubmitFormStyled>
  );
}

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
    background: none;
    border-bottom: 2px solid #fa86c1;
    box-shadow: 0px 6px 7px -5.5px #fa86c1;
    color: #8ac1e7;

    :focus {
      outline: none;
    }
  }

  button {
    position: absolute;
    right: 25px;
    bottom: 22px;
    width: 220px;
    font-size: 1.5rem;
    padding: 5px 10px;
    border: 3px solid #8ac1e7;
    border-radius: 10px;
    font-weight: 600;
    color: #8ac1e7;
    background: none;
    box-shadow: 0px 0px 12px 3px #8ac1e7, inset 0px 0px 6px 3px #8ac1e7;
    cursor: pointer;

    :focus {
      transform: scale(0.98);
    }
  }
`;
export default Form;

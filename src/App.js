import { Route, Routes, useParams, Link } from "react-router-dom";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Contents from "./Components/MainContainer";
import styled from "styled-components";
import { useSelector } from "react-redux";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Header />
            <Contents />
          </Layout>
        }
      />
      <Route path="/detail/:index" element={<DetailPage />} />
    </Routes>
  );
}
const WrapStyled = styled.div`
  width: 600px;
  height: 400px;
  border: 6px solid pi;
  box-shadow: 0px 0px 12px 3px #fa86c1, inset 0px 0px 6px 3px #fa86c1;
  padding: 20px;
  color: #fa86c1;
  border-radius: 25px;
  margin: 200px auto;
  button {
    width: 100px;
    height: 40px;
    font-size: 1.2rem;
    border: 3px solid #fa86c1;
    border-radius: 8px;
    background: none;
    margin-top: 10px;
    box-shadow: 0px 0px 10px 2px #fa86c1, inset 0px 0px 5px 2px #fa86c1;
    cursor: pointer;
    :focus {
      transform: scale(0.96);
    }

    a {
      color: #fa86c1;
      text-decoration: none;
    }
  }
`;

const DetailPage = () => {
  const todoList = useSelector((state) => state.todoAction.list);
  const { index } = useParams();
  const todo = todoList.find((todo) => todo.id === parseInt(index));

  return (
    <WrapStyled>
      <h3>id: {todo.id}</h3>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>

      <button>
        <Link to="/">뒤로가기</Link>
      </button>
    </WrapStyled>
  );
};

export default App;

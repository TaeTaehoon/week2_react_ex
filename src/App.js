import { Route, Routes, useParams, Link } from "react-router-dom";
import Layout from "./Layout";
import Header from "./Header";
import Contents from "./MainContainer";
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
  margin: 200px auto;
`;

const DetailPage = () => {
  const todoList = useSelector((state) => state.todoAction.list);
  const { index } = useParams();

  return (
    <WrapStyled>
      <h2>{todoList[index].title}</h2>
      <p>{todoList[index].description}</p>

      <button>
        <Link to="/">뒤로가기</Link>
      </button>
    </WrapStyled>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Header from "./Header";
import Contents from "./MainContainer";

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
      <Route path="/detail" />
    </Routes>
  );
}

export default App;

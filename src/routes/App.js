import Layout from "../containers/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appcontext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
function App() {
  const initialState = useInitialState();
  return (
    <Appcontext.Provider value={initialState}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Appcontext.Provider>
  );
}

export default App;

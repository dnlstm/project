import React from "react";
import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
// import LoginForm from "./pages/LoginForm";
import RegisterPage from "./pages/RegisterPage";
// import Info from "./pages/info/Info";
import LoginPage from "./pages/LoginPage/LoginPage";
import IdPwContainer from "./containers/IdPwContainer/IdPwContainer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/idpw" element={<IdPwContainer />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/list" element={<ListPage />} />
    </Routes>
  );
};

export default App;

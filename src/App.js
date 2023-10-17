import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ListPage from "./pages/ListPage";
// import LoginForm from "./pages/LoginForm";
import RegisterPage from "./pages/RegisterPage";
// import Info from "./pages/info/Info";
import LoginPage from "./pages/LoginPage/LoginPage";
import IdPwContainer from "./containers/IdPwContainer/IdPwContainer";
import ResultPage from "./pages/ResultPage";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import EvaluationPage from "./pages/EvaluationPage";

const App = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition key={location.pathname} classNames={"right"} timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/idpw" element={<IdPwContainer />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/evaluation" element={<EvaluationPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;

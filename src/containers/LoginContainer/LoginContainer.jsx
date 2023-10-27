import React, { useState } from "react";
import "./LoginContainer.scss";
import Login from "../../components/Login/Login";
import { useDispatch } from "react-redux";
import { logout, signInUser } from "../../modules/registerSlice";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const buttonClick = () => {
    dispatch(signInUser(email, password));
  };

  const logoutClick = () => {
    dispatch(logout);
  };

  return (
    <div>
      <Login
        email={email}
        password={password}
        emailChange={emailChange}
        passwordChange={passwordChange}
        buttonClick={buttonClick}
        logoutClick={logoutClick}
      />
    </div>
  );
};
export default LoginContainer;

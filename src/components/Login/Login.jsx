import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import LoginInput from "../common/input/LoginInput";

const Login = ({
  email,
  password,

  emailChange,
  passwordChange,
  buttonClick,
  logoutClick,
}) => {
  return (
    <div className="center">
      <div className="line">
        <h2> 공간안전인증원</h2>

        <LoginInput
          type="email"
          name="email"
          value={email}
          placeholder="이메일"
          onChange={emailChange}
        />
        <LoginInput
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호"
          onChange={passwordChange}
        />
        <Link to="/register">
          <span>회원가입</span>
        </Link>
        <Link to="/idpw">
          <span>아이디·비밀번호 찾기</span>
        </Link>
        <Link to="/list">
          <button onClick={buttonClick}>로그인</button>
        </Link>
        <button onClick={logoutClick}>로그아웃</button>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="center">
      <div className="line">
        <h2> 공간안전인증원</h2>
        <input className="input" placeholder="아이디" />
        <input className="input" placeholder="비밀번호" />
        <Link to="/register">
          <span>회원가입</span>
        </Link>
        <Link to="/idpw">
          <span>아이디·비밀번호 찾기</span>
        </Link>
        <Link to="/list">
          {" "}
          <button>로그인</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Login;

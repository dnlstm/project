import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="reg">
      <div className="line">
        <h2> 공간안전인증원</h2>
        <input className="input" placeholder="아이디" />
        <input className="input" placeholder="비밀번호" />
        <input className="input" placeholder="비밀번호 확인" />

        <Link to="/">
          {" "}
          <button>가입완료</button>{" "}
        </Link>
      </div>
    </div>
  );
};
export default Register;

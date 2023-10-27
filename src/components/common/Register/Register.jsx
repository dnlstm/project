import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import LoginInput from "../input/LoginInput";

const Register = ({
  name,
  email,
  password,
  nameChange,
  emailChange,
  passwordChange,
  buttonClick,
}) => {
  return (
    <div className="reg">
      <div className="line">
        <h2> 공간안전인증원</h2>

        <LoginInput
          type="text"
          name="name"
          value={name}
          placeholder="이름"
          onChange={nameChange}
        />
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

        <Link to="/">
          {" "}
          <button onClick={buttonClick}>가입완료</button>{" "}
        </Link>
      </div>
    </div>
  );
};
export default Register;

import React from "react";
import "./IdPw.scss";
import { Link } from "react-router-dom";

const IdPw = () => {
  return (
    <div className="res">
      <div className="line">
        <h2> 공간안전인증원</h2>
        <input className="input" placeholder="이름" />
        <input className="input" placeholder="전화번호" />
        <Link to="/">
          <button>아이디 찾기</button>
        </Link>
        <input className="input" placeholder="아이디" />
        <input className="input" placeholder="이름" />
        <input className="input" placeholder="전화번호" />
        <Link to="/">
          <button>비밀번호 찾기</button>
        </Link>
      </div>
    </div>
  );
};
export default IdPw;

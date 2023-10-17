import React from "react";
import "./top.scss";
import { Link } from "react-router-dom";

export default function Top() {
  return (
    <div className="top">
      <Link to="/list">정보</Link>▶<Link to="/evaluation">평가</Link>▶
      <Link to="/result">결과</Link>
    </div>
  );
}

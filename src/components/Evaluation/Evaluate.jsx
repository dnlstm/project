import React from "react";
import "./Evaluate.scss";
import Evaluation from "./Evaluation";
import { Link } from "react-router-dom";
import LongButton from "../common/button/LongButton/LongButton";
import Top from "../top/top";

export default function Evaluate() {
  return (
    <div className="ev">
      <Top />
      <Evaluation title="평가항목" />

      <Link to="/result">
        <LongButton name="저장" />
      </Link>
    </div>
  );
}

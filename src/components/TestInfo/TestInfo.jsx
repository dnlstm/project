import React from "react";
import "./TestInfo.scss";
import Input from "../common/input/Input";

export default function TestInfo({ title }) {
  return (
    <div className="main3">
      {/* <hr className="ma1" /> */}

      <h3>▣ {title}</h3>
      <Input name="이름" />
      <Input name="직급" />
      <Input name="부서" />
    </div>
  );
}

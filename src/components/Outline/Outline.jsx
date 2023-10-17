import React from "react";
import Input from "../common/input/Input";
import "./Outline.scss";
import Mainside from "../common/mainside/mainside";

export default function Outline() {
  return (
    <div className="outh3">
      <h3>▣ 건축물 현황</h3>

      <div className="main4">
        <Mainside name="건축물현황" />
        <div>
          <Input name="사업장명" />
          <Input name="건축물소재지" />
          <Input name="건물구조" />
          <Input name="연면적" />
          <Input name="건축면적" />
          <Input name="지상층층수" />
          <Input name="지하층층수" />
          <Input name="주용도" />
          <Input name="사용인일" />
        </div>
      </div>
    </div>
  );
}

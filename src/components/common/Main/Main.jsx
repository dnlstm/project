import React from "react";
import "./Main.scss";
// import Input from "../input/Input";
import PrePicture from "../../PrePicture/PrePicture";
import TestInfo from "../../TestInfo/TestInfo";
import Outline from "../../Outline/Outline";
import Evaluation from "../../Evaluation/Evaluation.jsx";
import LongButton from "../button/LongButton";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="mm">
      <div className="main">
        <div className="main2">
          {/* <div className="main3">
        

          <h3>▣ 테스터 정보</h3>
          <Input name="이름" />
          <Input name="직급" />
          <Input name="부서" />
        </div> */}
          <TestInfo title="테스터 정보" />
          {/* <div className="main4">
          <h3>▣ 건축물 현황</h3>
          <div className="mainside">건축물현황</div>
          <div className="main5">
            <Input name="사업장명" />
            <Input name="건축물소재지" />
            <Input name="건물구조" />
          </div>
          <div className="main6">
            <Input name="연면적" />
            <Input name="건축면적" />
          </div>

          <Input name="지상층층수" />
          <Input name="지하층층수" />
          <Input name="주용도" />
          <Input name="사용인일" />
        </div> */}
          <Outline />
          <PrePicture title="사업장 전경 사진" />
          <Evaluation title="평가항목" />
          <Link to="/result">
            <LongButton name="저장" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

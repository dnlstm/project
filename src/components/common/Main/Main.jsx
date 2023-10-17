import React from "react";
import "./Main.scss";
// import Input from "../input/Input";
import PrePicture from "../../PrePicture/PrePicture";
import TestInfo from "../../TestInfo/TestInfo";
import Outline from "../../Outline/Outline";
import LongButton from "../button/LongButton/LongButton";
import { Link } from "react-router-dom";
import Top from "../../top/top";

const Main = () => {
  return (
    <div className="main2">
      <Top />
      <TestInfo title="테스터 정보" />

      <Outline />
      <PrePicture title="사업장 전경 사진" />

      <Link to="/evaluation">
        <LongButton name="저장" />
      </Link>
    </div>
  );
};

export default Main;

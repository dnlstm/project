import React from "react";
import { FaFileCirclePlus } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaGear } from "react-icons/fa6";
import "./Side2.scss";
import { Link } from "react-router-dom";

const Side2 = () => {
  return (
    <div className="side">
      <Link to="/list">
        <button className="box2">
          {" "}
          <FaFileCirclePlus size="20" /> 새 평가 작성
        </button>
      </Link>
      <button className="box2">
        {" "}
        <FaListAlt size="20" /> 내 평가 목록
      </button>
      <button className="box2">
        <GrMail size="21" /> 문의하기
      </button>
      <button className="box2">
        {" "}
        <FaGear size="21" /> 설정{" "}
      </button>
    </div>
  );
};

export default Side2;

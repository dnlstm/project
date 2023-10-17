import React from "react";
import { FaFileCirclePlus } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaGear } from "react-icons/fa6";
import "./Side2.scss";
import { Link } from "react-router-dom";
import SideButton from "../button/SideButton/SideButton";

const Side2 = () => {
  return (
    <div className="side">
      <Link to="/list">
        <div className="sideButton">
          <FaFileCirclePlus size="20" color="black" />
          <SideButton name="새 평가 작성" />
        </div>
      </Link>
      <div className="sideButton">
        <FaListAlt size="20" />
        <SideButton name="내 평가 목록" />
      </div>
      <div className="sideButton">
        <GrMail size="21" />
        <SideButton name="문의하기" />
      </div>
      <div className="sideButton">
        <FaGear size="21" />
        <SideButton name="설정" />
      </div>
    </div>
  );
};

export default Side2;

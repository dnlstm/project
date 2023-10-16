import React from "react";
import { BsFillPersonVcardFill } from "react-icons/bs";
import "./Side3.scss";
import { Link } from "react-router-dom";

const Side3 = () => {
  return (
    <Link to="/">
      <div className="box3">
        <div className="lg">
          <BsFillPersonVcardFill className="svg" size="35" />
        </div>
        <h4>로그인중</h4>
      </div>
    </Link>
  );
};

export default Side3;

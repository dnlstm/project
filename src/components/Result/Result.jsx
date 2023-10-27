import React from "react";
import "./Result.scss";
import Top from "../top/top";
import LongButton from "../common/button/LongButton/LongButton";

export default function Result() {
  return (
    <div className="mai">
      <Top />

      <div className="res">
        <img src="img/결과.jpg" alt="결과" width="700" />
        <img src="img/결과표.jpg" alt="결과표" width="900" />

        <LongButton name="저장" />
      </div>
    </div>
  );
}

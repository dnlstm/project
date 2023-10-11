import React from "react";
// import classNames from "classnames";
import "./SideBar.scss";
import Side1 from "../Side/Side1";
import Side2 from "../Side/Side2";
import Side3 from "../Side/Side3";

function SideBar() {
  return (
    <div className="templete">
      <Side1 />
      <Side2 />
      <Side3 />
    </div>
  );
}

export default SideBar;

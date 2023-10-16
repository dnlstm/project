import React from "react";

import "./ListPage.scss";
import Result from "../components/Result/Result";
import SideBarContainer from "../containers/SideBarContainer/SideBarContainer";

const ResultPage = () => {
  return (
    <div className="list1">
      <SideBarContainer />
      <Result />
    </div>
  );
};

export default ResultPage;

import React from "react";
import SideBarContainer from "../containers/SideBarContainer/SideBarContainer";
import Main from "../components/common/Main/Main";
import "./ListPage.scss";

const ListPage = () => {
  return (
    <div className="list1">
      <div className="list2">
        <SideBarContainer />
        <Main />
      </div>
    </div>
  );
};

export default ListPage;
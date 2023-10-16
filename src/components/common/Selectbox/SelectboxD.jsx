import React from "react";
import "./SelectboxD.scss";

export default function SelectboxD({ name }) {
  return (
    <div className="selD">
      <label htmlFor="seD"> {name}</label>
      <select id="seD">
        <option>2004.12</option>
        <option>2008</option>
        <option>2013.03</option>
        <option>2013.12</option>
        <option>2018.02</option>
        <option>2012.07 2022.04</option>
        <option>명판 제조년도 미기재</option>
        <option selected>해당없음</option>
      </select>
    </div>
  );
}

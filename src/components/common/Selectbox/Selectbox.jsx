import React from "react";
import "./Selectbox.scss";

export default function Selectbox({ name }) {
  return (
    <div className="sel">
      <label htmlFor="se"> {name}</label>
      <select id="se">
        <option>20</option>
        <option>32</option>
        <option>40</option>
        <option>50</option>
        <option>60</option>
        <option>65</option>
        <option>80</option>
        <option>100</option>
        <option>125</option>
        <option>독립배관방식</option>
        <option selected>해당없음</option>
      </select>
    </div>
  );
}

import React from "react";
import "./Input.scss";

function Input({ name }) {
  return (
    <div className="in2">
      <div className="in1">
        <span>{name}</span>
      </div>
      <input />
    </div>
  );
}
export default Input;

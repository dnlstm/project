import React from "react";
import "./mainside.scss";

export default function Mainside({ name }) {
  return (
    <div>
      <div className="mainside">{name}</div>
    </div>
  );
}

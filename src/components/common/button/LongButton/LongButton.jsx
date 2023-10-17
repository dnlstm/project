import React from "react";
import "./LongButton.scss";

export default function LongButton({ name }) {
  return (
    <div className="dd">
      <button>{name}</button>
    </div>
  );
}

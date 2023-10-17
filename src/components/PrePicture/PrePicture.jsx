import React from "react";
import "./PrePicture.scss";

export default function PrePicture({ title }) {
  return (
    <div className="all">
      <div className="main7">{title}</div>

      <div className="main8">
        <input type="file" />
      </div>
    </div>
  );
}

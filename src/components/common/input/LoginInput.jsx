import React from "react";
import "./LoginInput.scss";

export default function LoginInput({
  type,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

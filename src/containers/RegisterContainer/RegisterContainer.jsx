import React, { useState } from "react";
import Register from "../../components/common/Register/Register";

export default function RegisterContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChange = (e) => setName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const buttonClick = () => {
    console.log(name, email, password);
  };

  return (
    <div>
      <Register
        name={name}
        email={email}
        password={password}
        nameChange={nameChange}
        emailChange={emailChange}
        passwordChange={passwordChange}
        buttonClick={buttonClick}
      />
    </div>
  );
}

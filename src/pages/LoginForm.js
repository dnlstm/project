import React from "react";
import { Helmet } from "react-helmet-async";
// import Button from "../components/common/button/Button";

const LoginForm = ({
  clicked,
  id,
  password,
  handleChange,
  handleKeyDown,
  handleClick,
}) => {
  return (
    <div>
      <Helmet>
        <title>로그인</title>
      </Helmet>
    </div>
  );
};

export default LoginForm;

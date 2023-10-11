import React from "react";
import classNames from "classnames";
// import "./Select.scss";
import Box from "../../../lib/Box";

function Select({ children, size, color, fullWidth }) {
  return (
    <Box className={classNames("Select", size, color, { fullWidth })}>
      {children}
    </Box>
  );
}

Select.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Select;

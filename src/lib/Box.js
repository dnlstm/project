import React, { useState } from "react";
import Select from "react-select";

let selectOptions = [
  { value: "종류1", label: "종류1" },
  { value: "종류2", label: "종류2" },
  { value: "종류3", label: "종류3" },
  { value: "종류4", label: "종류4" },
  { value: "종류5", label: "종류5" },
];

export const Box = () => {
  const [selectedValue, setSelectedValue] = useState({});

  return (
    <Select
      onChange={(e) => setSelectedValue(e.value)}
      options={selectOptions}
      placeholder="유형 선택"
      value={selectOptions.filter(function (option) {
        return option.value === selectedValue;
      })}
    />
  );
};

export default Box;

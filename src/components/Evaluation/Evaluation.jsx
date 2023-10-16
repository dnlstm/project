import React from "react";
import "./Evaluation.scss";
import Input from "../common/input/Input";
import Selectbox from "../common/Selectbox/Selectbox";
import SelectboxD from "../common/Selectbox/SelectboxD";

export default function Evaluation({ title }) {
  return (
    <div className="main9">
      <h3>▣ {title}</h3>
      <Input name="주용도" />
      <Input name="사업장명" />
      <Input name="방호구역명" />
      <Input name="약제종류" />
      <Input name="저장용기수" />
      {/* <Input name="선택밸브 구경" /> */}
      <Selectbox name="선택밸브 구경" />
      {/* <Input name="제조년월일" /> */}
      <SelectboxD name="제조년월일" />
      <Input name="시험종류" />
      <Input name="작동여부" />
      <Input name="불량내용" />
    </div>
  );
}

import React, { useContext } from "react";
import { CardContext } from "../BoxContainer/CardContext";
import "./Input.css";

function Input() {
  const { str } = useContext(CardContext);
  const { setStr } = useContext(CardContext);
  const handleChange = (e) => setStr(e.target.value);

  return (
    <input
      type="text"
      id="somestr"
      name="String"
      value={str}
      placeholder="STRING    (Input)"
      aria-label="box-input"
      onChange={handleChange}
    />
  );
}

export default Input;

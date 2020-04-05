import React from "react";
import "./toggle.css";
const Toggle = props =>
(
    <div>
    <button className="toggle" onClick={props.click}>
      <div className="toggleline" />
      <div className="toggleline" />
      <div className="toggleline" />
    </button>
    </div>
  );
export default Toggle;

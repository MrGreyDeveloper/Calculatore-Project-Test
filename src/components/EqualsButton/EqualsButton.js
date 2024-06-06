import React from "react";
import "./EqualsButton.css";

const EqualsButton = ({ onClick }) => (
  <input type="button" value="=" onClick={onClick} className="equals-button" />
);

export default EqualsButton;

import React from "react";

const Button = ({ value, onClick, className = "" }) => (
  <input type="button" value={value} onClick={onClick} className={className} />
);

export default Button;

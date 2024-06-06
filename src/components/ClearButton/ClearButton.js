import React from "react";

const ClearButton = ({ onClick }) => (
  <input type="button" value="AC" onClick={onClick} className="clear-button" />
);

export default ClearButton;

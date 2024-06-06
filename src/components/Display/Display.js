import React from "react";

const Display = ({ value }) => (
  <div className="display">
    <input type="text" value={value} readOnly />
  </div>
);

export default Display;

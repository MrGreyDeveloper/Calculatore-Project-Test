import React from "react";
import MuiButton from "@mui/material/Button";

const CustomButton = ({ value, onClick, className = "" }) => (
  <MuiButton onClick={onClick} className={className}>
    {value}
  </MuiButton>
);

export default CustomButton;

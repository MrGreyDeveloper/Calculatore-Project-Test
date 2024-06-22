import React from "react";
import Button from "@mui/material/Button";

const ClearButton = ({ onClick }) => (
  <Button variant="outlined" onClick={onClick}>
    AC
  </Button>
);

export default ClearButton;

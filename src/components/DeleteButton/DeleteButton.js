import React from "react";
import Button from "@mui/material/Button";

const DeleteButton = ({ onClick }) => (
  <Button variant="outlined" onClick={onClick}>
    DE
  </Button>
);

export default DeleteButton;

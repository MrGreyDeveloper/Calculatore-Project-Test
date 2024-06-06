import React from "react";

const DeleteButton = ({ onClick }) => (
  <input type="button" value="DE" onClick={onClick} className="delete-button" />
);

export default DeleteButton;

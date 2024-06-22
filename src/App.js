import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Display from "./components/Display/Display.js";
import ClearButton from "./components/ClearButton/ClearButton.js";
import DeleteButton from "./components/DeleteButton/DeleteButton.js";
import { evaluateExpression } from "./utils";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.textContent);
  };

  const handleEqualClick = () => {
    try {
      setValue(evaluateExpression(value).toString());
    } catch (error) {
      setValue("Error");
    }
  };

  const handleClearClick = () => {
    setValue("");
  };

  const handleDeleteClick = () => {
    setValue(value.slice(0, -1));
  };

  const renderButtons = (values, onClick) => {
    return values.map((val) => (
      <Button key={val} variant="contained" onClick={onClick}>
        {val}
      </Button>
    ));
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <Display value={value} />
          <div>
            <ClearButton onClick={handleClearClick} />
            <DeleteButton onClick={handleDeleteClick} />
            <Button variant="contained" onClick={handleClick}>
              .
            </Button>
            <Button variant="contained" onClick={handleClick}>
              /
            </Button>
          </div>
          <div>{renderButtons(["7", "8", "9", "*"], handleClick)}</div>
          <div>{renderButtons(["4", "5", "6", "+"], handleClick)}</div>
          <div>{renderButtons(["1", "2", "3", "-"], handleClick)}</div>
          <div>
            {renderButtons(["00", "0"], handleClick)}
            <Button
              variant="contained"
              onClick={handleEqualClick}
              className="equal"
            >
              =
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.value);
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
      <Button key={val} value={val} onClick={onClick} />
    ));
  };

  const Button = ({ value, onClick, className = "" }) => (
    <input
      type="button"
      value={value}
      onClick={onClick}
      className={className}
    />
  );

  const evaluateExpression = (expression) => {
    // Simple parser for basic arithmetic operations
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    const calculate = (tokens) => {
      let stack = [];
      let currentOp = null;

      tokens.forEach((token) => {
        if (!isNaN(token)) {
          if (currentOp) {
            const b = parseFloat(token);
            const a = stack.pop();
            stack.push(operators[currentOp](a, b));
            currentOp = null;
          } else {
            stack.push(parseFloat(token));
          }
        } else if (operators[token]) {
          currentOp = token;
        }
      });

      return stack[0];
    };

    const tokens = expression.split(/([+\-*/])/).filter(Boolean);
    return calculate(tokens);
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <Button value="AC" onClick={handleClearClick} />
            <Button value="DE" onClick={handleDeleteClick} />
            <Button value="." onClick={handleClick} />
            <Button value="/" onClick={handleClick} />
          </div>

          <div>{renderButtons(["7", "8", "9", "*"], handleClick)}</div>

          <div>{renderButtons(["4", "5", "6", "+"], handleClick)}</div>

          <div>{renderButtons(["1", "2", "3", "-"], handleClick)}</div>

          <div>
            {renderButtons(["00", "0"], handleClick)}
            <Button value="=" onClick={handleEqualClick} className="equal" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

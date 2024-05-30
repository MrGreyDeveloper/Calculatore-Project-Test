export const evaluateExpression = (expression) => {
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

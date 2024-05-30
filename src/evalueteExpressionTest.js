import { evaluateExpression } from "./utils";

test("sabiranje", () => {
  expect(evaluateExpression("2+3")).toBe(5);
});

test("oduzimanje", () => {
  expect(evaluateExpression("5-2")).toBe(3);
});

test("mnozenje", () => {
  expect(evaluateExpression("3*4")).toBe(12);
});

test("djeljenje", () => {
  expect(evaluateExpression("10/2")).toBe(5);
});

test("mixed operacije", () => {
  expect(evaluateExpression("2+3*4")).toBe(14);
});

test("returns za nevazece izraze NaN", () => {
  expect(evaluateExpression("2++3")).toBeNaN();
});

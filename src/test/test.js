import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders calculator correctly", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

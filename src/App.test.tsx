import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

test("renders title", () => {
  render(<App />);
  const titleElement = screen.getByText(/nuffshell/i);
  expect(titleElement).toBeInTheDocument();
});

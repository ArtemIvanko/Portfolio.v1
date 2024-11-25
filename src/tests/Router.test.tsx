import { render, screen } from "@testing-library/react";
import { Router } from "../pages/Router";

test("renders the correct components for each route", () => {
  render(<Router />);

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("About")).toBeInTheDocument();
  expect(screen.getByText("Projects")).toBeInTheDocument();
});

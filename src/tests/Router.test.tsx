import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Router } from "../pages/Router";

test("renders the correct components for each route", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/home"]}>
      <Router />
    </MemoryRouter>
  );

  expect(getByText("Home")).toBeInTheDocument();
});

test("renders NotFound component for unknown routes", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/unknown"]}>
      <Router />
    </MemoryRouter>
  );

  expect(getByText("Error 404")).toBeInTheDocument();
  expect(getByText("Not Found.")).toBeInTheDocument();
});

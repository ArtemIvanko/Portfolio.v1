import { render, screen } from "@testing-library/react";
import { App } from "../App";

test("renders the App component", () => {
  render(<App />);
  const appElement = screen.queryByTestId("app-component");
  expect(appElement).toBeInTheDocument;
});

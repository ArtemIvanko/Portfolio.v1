import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe("NotFound component", () => {
  test("displays error message", () => {
    render(<NotFound />);

    const errorMessage = screen.getByText(/error 404/i);

    expect(errorMessage).toBeInTheDocument();
  });

  test("displays 'Not Found' message on desktop resolution", () => {
    render(<NotFound />);

    const notFoundMessage = screen.getByText(/not found/i);

    expect(notFoundMessage).toBeInTheDocument();
  });

  test("displays '|' separator on desktop resolution", () => {
    render(<NotFound />);

    const separator = screen.getByText(/\|/i);

    expect(separator).toBeInTheDocument();
  });
});

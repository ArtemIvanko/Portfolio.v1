import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { NotFound } from "./NotFound";

const defaultTheme = createTheme();

describe("NotFound component", () => {
  test("displays error message", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <NotFound />
      </ThemeProvider>
    );

    const errorMessage = screen.getByText(/error 404/i);

    expect(errorMessage).toBeInTheDocument();
  });

  test("displays 'Not Found' message on desktop resolution", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <NotFound />
      </ThemeProvider>
    );

    const notFoundMessage = screen.getByText(/not found/i);

    expect(notFoundMessage).toBeInTheDocument();
  });
});

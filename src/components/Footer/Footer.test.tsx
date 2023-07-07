import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { Footer } from "./Footer";

const defaultTheme = createTheme();

describe("Footer component", () => {
  test("displays copyright text", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </ThemeProvider>
    );

    const copyrightText = screen.getByText(/copyright/i);

    expect(copyrightText).toBeInTheDocument();
  });

  test("renders social icons", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </ThemeProvider>
    );

    const githubIcon = screen.queryByTestId("github-icon");
    const pinterestIcon = screen.queryByTestId("pinterest-icon");
    const twitterIcon = screen.queryByTestId("twitter-icon");
    const telegramIcon = screen.queryByTestId("telegram-icon");

    expect(githubIcon).toBeInTheDocument;
    expect(pinterestIcon).toBeInTheDocument;
    expect(twitterIcon).toBeInTheDocument;
    expect(telegramIcon).toBeInTheDocument;
  });
});

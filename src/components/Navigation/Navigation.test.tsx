import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { Navigation } from "./Navigation";

const theme = createTheme();

describe("Navigation component", () => {
  test("displays navigation links", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </ThemeProvider>
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const projectsLink = screen.getByRole("link", { name: /projects/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
  });

  test("displays loading indicator initially", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </ThemeProvider>
    );

    const loadingIndicator = screen.getByRole("progressbar");

    expect(loadingIndicator).toBeInTheDocument();
  });

  test("renders child routes when loading is complete", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </ThemeProvider>
    );

    await waitFor(() => {
      const loadingIndicator = screen.queryByRole("progressbar");
      const outlet = screen.getByRole("main");

      expect(loadingIndicator).not.toBeInTheDocument;
      expect(outlet).toBeInTheDocument;
    });
  });
});

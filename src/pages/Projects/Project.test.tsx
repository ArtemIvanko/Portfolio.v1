import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { MemoryRouter } from "react-router-dom";
import { Projects } from "./Projects";

const theme = createTheme();

describe("Projects component", () => {
  test("displays project portfolio showcase title", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Projects />
        </MemoryRouter>
      </ThemeProvider>
    );

    const title = screen.getByText(/project portfolio showcase/i);

    expect(title).toBeInTheDocument();
  });

  test("displays project descriptions", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Projects />
        </MemoryRouter>
      </ThemeProvider>
    );

    const description1 = screen.getByText(
      /TypeScript react portfolio/i
    );
    const description2 = screen.getByText(
      /welcome to my frontend portfolio showcase/i
    );

    expect(description1).toBeInTheDocument();
    expect(description2).toBeInTheDocument();
  });

  test("renders project cards", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Projects />
        </MemoryRouter>
      </ThemeProvider>
    );

    const projectTitle = screen.getByText(/portfolio project/i);

    expect(projectTitle).toBeInTheDocument();
  });

  test("renders project card with social icons and visit project button", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Projects />
        </MemoryRouter>
      </ThemeProvider>
    );

    const socialIcons = screen.getAllByRole("link");
    const visitProjectButton = screen.getByRole("button", {
      name: /visit project/i,
    });

    expect(socialIcons.length).toBeGreaterThanOrEqual(1);
    expect(visitProjectButton).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home";

const theme = createTheme();

describe("Home component", () => {
  test("displays text content", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    const heading = screen.getByRole("heading", { level: 4 });
    const paragraph1 = screen.getByText(/turning vision into reality/i);
    const paragraph2 = screen.getByText(/welcome to my portfolio/i);

    expect(heading).toBeInTheDocument();
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  test("renders image on desktop resolution", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    const image = screen.queryByAltText("background img");

    expect(image).toBeNull();
  });

  test("downloads resume on button click", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    const downloadButton = screen.getByRole("button", { name: /resume/i });

    fireEvent.click(downloadButton);
  });

  test("displays contact link", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>
    );

    const contactLink = screen.getByRole("link", { name: /contact/i });

    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "mailto:tema30k@gmail.com");
  });
});

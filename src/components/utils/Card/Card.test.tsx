import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { MemoryRouter } from "react-router-dom";
import { Card } from "./Card";

const theme = createTheme();

describe("Card component", () => {
  const mockProps = {
    topic: "Test Topic",
    title: "Test Title",
    children: <div>Test Children</div>,
    imgSrc: "http://localhost/test-image.jpg",
    description: "Test Description",
  };

  test("renders topic, title, description, and children", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Card {...mockProps} />
        </MemoryRouter>
      </ThemeProvider>
    );

    const topicElement = screen.getByText(mockProps.topic);
    const titleElement = screen.getByText(mockProps.title);
    const descriptionElement = screen.getByText(mockProps.description);
    const childrenElement = screen.getByText("Test Children");

    expect(topicElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });

  test("renders image if imgSrc is provided", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Card {...mockProps} />
        </MemoryRouter>
      </ThemeProvider>
    );

    const imageElement = screen.getByAltText("Card Image") as HTMLImageElement;

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe(mockProps.imgSrc);
  });

  test("does not render image if imgSrc is not provided", () => {
    const propsWithoutImage = { ...mockProps, imgSrc: undefined };
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Card {...propsWithoutImage} />
        </MemoryRouter>
      </ThemeProvider>
    );

    const imageElement = screen.queryByAltText("Card Image");

    expect(imageElement).toBeNull();
  });
});

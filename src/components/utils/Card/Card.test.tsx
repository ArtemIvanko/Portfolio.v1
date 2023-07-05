import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card component", () => {
  const mockProps = {
    topic: "Test Topic",
    title: "Test Title",
    children: <div>Test Children</div>,
    imgSrc: "test-image.jpg",
    description: "Test Description",
  };

  test("renders topic, title, description, and children", () => {
    render(<Card {...mockProps} />);

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
    render(<Card {...mockProps} />);

    const imageElement = screen.getByAltText("Card Image") as HTMLImageElement;

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe(mockProps.imgSrc);
  });

  test("does not render image if imgSrc is not provided", () => {
    const propsWithoutImage = { ...mockProps, imgSrc: undefined };
    render(<Card {...propsWithoutImage} />);

    const imageElement = screen.queryByAltText("Card Image");

    expect(imageElement).toBeNull();
  });
});

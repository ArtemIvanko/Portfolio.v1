import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from "./Home";

describe("Home component", () => {
  test("displays text content", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 4 });
    const paragraph1 = screen.getByText(/turning vision into reality/i);
    const paragraph2 = screen.getByText(/welcome to my portfolio/i);

    expect(heading).toBeInTheDocument();
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  test("renders image on desktop resolution", () => {
    render(<Home />);

    const image = screen.getByAltText("background img");

    expect(image).toBeInTheDocument();
  });

  test("downloads resume on button click", () => {
    render(<Home />);

    const downloadButton = screen.getByRole("button", { name: /resume/i });

    fireEvent.click(downloadButton);
  });

  test("displays contact link", () => {
    render(<Home />);

    const contactLink = screen.getByRole("link", { name: /contact/i });

    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "mailto:tema30k@gmail.com");
  });
});

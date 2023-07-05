import { render, screen } from "@testing-library/react";
import { Projects } from "./Projects";

describe("Projects component", () => {
  test("displays project portfolio showcase title", () => {
    render(<Projects />);

    const title = screen.getByText(/project portfolio showcase/i);

    expect(title).toBeInTheDocument();
  });

  test("displays project descriptions", () => {
    render(<Projects />);

    const description1 = screen.getByText(
      /typeScript react portfolio project/i
    );
    const description2 = screen.getByText(
      /welcome to my frontend portfolio showcase/i
    );

    expect(description1).toBeInTheDocument();
    expect(description2).toBeInTheDocument();
  });

  test("renders project cards", () => {
    render(<Projects />);

    const projectCard = screen.getByRole("article");
    const projectTitle = screen.getByText(/portfolio project/i);

    expect(projectCard).toBeInTheDocument();
    expect(projectTitle).toBeInTheDocument();
  });

  test("renders project card with social icons and visit project button", () => {
    render(<Projects />);

    const socialIcons = screen.getAllByRole("img");
    const visitProjectButton = screen.getByRole("button", {
      name: /visit project/i,
    });

    expect(socialIcons.length).toBeGreaterThanOrEqual(1);
    expect(visitProjectButton).toBeInTheDocument();
  });
});

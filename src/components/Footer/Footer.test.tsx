import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer component", () => {
  test("displays copyright text", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/copyright/i);

    expect(copyrightText).toBeInTheDocument();
  });

  test("renders social icons", () => {
    render(<Footer />);

    const githubIcon = screen.getByRole("link", { name: /github/i });
    const pinterestIcon = screen.getByRole("link", { name: /pinterest/i });
    const twitterIcon = screen.getByRole("link", { name: /twitter/i });
    const telegramIcon = screen.getByRole("link", { name: /telegram/i });

    expect(githubIcon).toBeInTheDocument();
    expect(pinterestIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(telegramIcon).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { MemoryRouter } from "react-router-dom";
import { Link, LinkColor } from "@utils/Link";
import { ReactElement } from "react";
import { LinkProps } from "@mui/material";

interface ILinkProps extends LinkProps {
  href: string;
  color?: LinkColor;
  pathName?: string;
}

const theme = createTheme();

describe("Link component", () => {
  const mockProps: ILinkProps = {
    href: "/home",
    color: LinkColor.Primary,
  };

  const renderLink = (props: ILinkProps): ReactElement => {
    return (
      <MemoryRouter>
        <Link {...props} />
      </MemoryRouter>
    );
  };

  test("renders link with correct color", () => {
    render(
      <ThemeProvider theme={theme}>{renderLink(mockProps)}</ThemeProvider>
    );

    const linkElement = screen.getByRole("link");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveStyle("color: rgb(25, 118, 210)");
  });
});

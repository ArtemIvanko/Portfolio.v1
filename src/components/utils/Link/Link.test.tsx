import { render, screen } from "@testing-library/react";
import { Link, LinkColor } from "@utils/Link";
import { ReactElement } from "react";
import { LinkProps } from "@mui/material";

interface ILinkProps extends LinkProps {
  href: string;
  color?: LinkColor;
  pathName?: string;
}

describe("Link component", () => {
  const mockProps: ILinkProps = {
    href: "/home",
    color: LinkColor.Primary,
  };

  const renderLink = (props: ILinkProps): ReactElement => {
    return <Link {...props} />;
  };

  test("renders link with correct color", () => {
    render(renderLink(mockProps));

    const linkElement = screen.getByRole("link");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveStyle(`color: ${mockProps.color}`);
  });
});

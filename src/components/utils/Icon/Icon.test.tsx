import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { MemoryRouter } from "react-router-dom";
import { ReactElement } from "react";
import { IconVariant } from "@/constants/common";
import { Icon } from "@utils/Icon";
import { LinkColor } from "@utils/Link";

interface ISocialLinkProps {
  icon: IconVariant;
  href?: string;
  color?: LinkColor;
}

const theme = createTheme();

describe("Icon component", () => {
  const mockProps: ISocialLinkProps = {
    icon: "github",
    href: "https://github.com",
    color: LinkColor.Primary,
  };

  const renderIcon = (props: ISocialLinkProps): ReactElement => {
    return (
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Icon {...props} />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  test("renders icon with link if href is provided", () => {
    render(renderIcon(mockProps));

    const linkElement = screen.getByRole("link");
    const iconElement = screen.queryByRole("img");

    expect(linkElement).toBeInTheDocument();
    expect(iconElement).toBeNull();
  });

  test("renders icon without link if href is not provided", () => {
    const propsWithoutHref = { ...mockProps, href: undefined };
    render(renderIcon(propsWithoutHref));

    const linkElement = screen.queryByRole("link");
    const iconElement = screen.queryByRole("img");

    expect(linkElement).toBeNull();
    expect(iconElement).toBeNull();
  });

  test("renders correct icon based on the provided variant", () => {
    const variants: IconVariant[] = [
      "github",
      "pinterest",
      "twitter",
      "telegram",
      "css",
      "figma",
      "git",
      "html",
      "js",
      "node",
      "npm",
      "react",
      "yarn",
    ];

    variants.forEach((variant) => {
      const propsWithVariant = { ...mockProps, icon: variant };
      render(renderIcon(propsWithVariant));

      const iconElement = screen.queryByRole("img");

      expect(iconElement).toBeNull();
    });
  });
});

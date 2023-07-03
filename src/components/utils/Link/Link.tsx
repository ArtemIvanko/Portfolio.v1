import { Link as ReactLink, useLocation } from "react-router-dom";
import { LinkProps } from "@mui/material";
import styled from "@/DefaultTheme";

export enum LinkColor {
  Primary = "Primary",
  Secondary = "Secondary",
}

interface ILinkProps extends LinkProps {
  href: string;
  color?: LinkColor;
  pathName?: string;
}

interface StyledLinkProps {
  $color: LinkColor;
  $isActive: boolean;
}

export const Link = ({
  href,
  children,
  pathName,
  color = LinkColor.Primary,
}: ILinkProps) => {
  const location = useLocation();

  return (
    <StyledLink
      $isActive={location.pathname === pathName}
      $color={color}
      to={href}
    >
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(ReactLink)<StyledLinkProps>(
  ({ theme, $color, $isActive }) => {
    const fillTextByColor: Record<LinkColor, string> = {
      [LinkColor.Primary]: theme.palette.primary.main,
      [LinkColor.Secondary]: theme.palette.secondary.main,
    };

    return {
      display: "inline-flex",
      textDecoration: "none",
      color: fillTextByColor[$color],
      padding: "0.25rem 0.5rem",

      ...(!!$isActive && {
        fontWeight: "600",
        color: theme.palette.primary.light,
      }),

      "&:hover": {
        fontWeight: "600",
      },
    };
  }
);

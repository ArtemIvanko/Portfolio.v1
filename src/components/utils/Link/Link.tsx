import { Link as ReactLink } from "react-router-dom";
import { LinkProps } from "@mui/material";
import styled from "@/DefaultTheme";

export enum LinkColor {
  Primary = "Primary",
  Secondary = "Secondary",
}

interface ILinkProps extends LinkProps {
  href: string;
  color?: LinkColor;
}

interface StyledLinkProps {
  $color: LinkColor;
}

export const Link = ({
  href,
  children,
  color = LinkColor.Primary,
}: ILinkProps) => {
  return (
    <StyledLink $color={color} to={href}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(ReactLink)<StyledLinkProps>(({ theme, $color }) => {
  const fillTextByColor: Record<LinkColor, string> = {
    [LinkColor.Primary]: theme.palette.primary.main,
    [LinkColor.Secondary]: theme.palette.secondary.main,
  };

  return {
    textDecoration: "none",
    color: fillTextByColor[$color],
    display: "inline-flex",
    padding: "0.5rem",

    "&:hover": {
      fontWeight: "600",
    },
  };
});

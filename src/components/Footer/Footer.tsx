import { IconButton, Typography, Link } from "@mui/material";
import { ReactNode } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import styled from "@/DefaultTheme";

interface ISocialLinkProps {
  href: string;
  icon: ReactNode;
}

export const Footer = () => (
  <Root>
    <CopyrightTitle variant="body2">2023 © All Rights Reserved.</CopyrightTitle>
    <LinkContainer>
      <SocialLink href="" icon={<GitHubIcon />} />
      <SocialLink href="" icon={<PinterestIcon />} />
      <SocialLink href="" icon={<TwitterIcon />} />
      <SocialLink href="" icon={<TelegramIcon />} />
    </LinkContainer>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "5rem",
  background: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: "0.5rem",
}));

const CopyrightTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

const LinkContainer = styled("div")({
  display: "flex",
});

const SocialLink = ({ href, icon }: ISocialLinkProps) => (
  <IconButton>
    <Link color="secondary" href={href}>
      {icon}
    </Link>
  </IconButton>
);

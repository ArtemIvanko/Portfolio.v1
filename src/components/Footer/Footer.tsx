import { Typography } from "@mui/material";
import { ReactNode } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link, LinkColor } from "@shared/utils/Link";
import styled from "@/DefaultTheme";

interface ISocialLinkProps {
  href: string;
  icon?: ReactNode;
}

export const Footer = () => (
  <Root>
    <Typography variant="body1">Copyright (c) 2023 Artem Ivanko</Typography>
    <div>
      <SocialLink href="" icon={<GitHubIcon />} />
      <SocialLink href="" icon={<PinterestIcon />} />
      <SocialLink href="" icon={<TwitterIcon />} />
      <SocialLink href="" icon={<TelegramIcon />} />
    </div>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: "0.5rem",
}));

const SocialLink = ({ href, icon }: ISocialLinkProps) => (
  <Link href={href} color={LinkColor.Secondary}>
    {icon}
  </Link>
);

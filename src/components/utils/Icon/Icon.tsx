import { ReactNode } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link, LinkColor } from "@utils/Link";
import styled from "@/DefaultTheme";

type IconVariant = "github" | "pinterest" | "twitter" | "telegram";

interface ISocialLinkProps {
  icon: IconVariant;
  href?: string;
  color?: LinkColor;
}

export const Icon = ({ href, icon, color }: ISocialLinkProps) => {
  const getIconComponent = (iconName: IconVariant): ReactNode => {
    switch (iconName) {
      case "github":
        return <GitHubIcon />;
      case "pinterest":
        return <PinterestIcon />;
      case "twitter":
        return <TwitterIcon />;
      case "telegram":
        return <TelegramIcon />;
      default:
        return null;
    }
  };

  const iconComponent = getIconComponent(icon);

  if (!href) {
    return <IconContainer>{iconComponent}</IconContainer>;
  }

  return (
    <Link href={href} color={color}>
      {iconComponent}
    </Link>
  );
};

const IconContainer = styled("div")({
  display: "inline-flex",
  padding: "0.25rem 0.5rem",
});

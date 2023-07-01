import { ReactNode } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link, LinkColor } from "@utils/Link";

type IconVariant = "github" | "pinterest" | "twitter" | "telegram";

interface ISocialLinkProps {
  href: string;
  icon: IconVariant;
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

  return (
    <Link href={href} color={color}>
      {iconComponent}
    </Link>
  );
};

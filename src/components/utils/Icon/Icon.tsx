import { ReactNode } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { ReactComponent as CssIcon } from "@assets/icons/css.svg";
import { ReactComponent as FigmaIcon } from "@assets/icons/figma.svg";
import { ReactComponent as GitIcon } from "@assets/icons/git.svg";
import { ReactComponent as HtmlIcon } from "@assets/icons/html.svg";
import { ReactComponent as JsIcon } from "@assets/icons/js.svg";
import { ReactComponent as NodeIcon } from "@assets/icons/node.svg";
import { ReactComponent as NpmIcon } from "@assets/icons/npm.svg";
import { ReactComponent as ReactIcon } from "@assets/icons/react.svg";
import { ReactComponent as YarnIcon } from "@assets/icons/yarn.svg";
import { ReactComponent as MUIIcon } from "@assets/icons/mui.svg";
import { ReactComponent as SassIcon } from "@assets/icons/sass.svg";
import { ReactComponent as TsIcon } from "@assets/icons/typescript.svg";
import { ReactComponent as WebpackIcon } from "@assets/icons/webpack.svg";
import { Link, LinkColor } from "@utils/Link";
import { IconVariant } from "@/constants/common";
import styled from "@/DefaultTheme";

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
      case "css":
        return <CssIcon fill="#1572B6" width="100%" />;
      case "figma":
        return <FigmaIcon fill="#F24E1E" />;
      case "git":
        return <GitIcon fill="#F1502F" />;
      case "html":
        return <HtmlIcon fill="#E34F26" />;
      case "js":
        return <JsIcon fill="#F7DF1E" />;
      case "node":
        return <NodeIcon fill="#339933" />;
      case "npm":
        return <NpmIcon fill="#CB3837" />;
      case "react":
        return <ReactIcon fill="#61DAFB" />;
      case "yarn":
        return <YarnIcon fill="#2C8EBB" />;
      case "mui":
        return <MUIIcon />;
      case "ts":
        return <TsIcon />;
      case "webpack":
        return <WebpackIcon />;
      case "sass":
        return <SassIcon />;
      case "handshake":
        return <HandshakeIcon />;
      case "analytics":
        return <AssessmentIcon />;
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
  display: "flex",
  alignItems: "center",
  padding: "0 0.5rem",
  width: "3rem",
  height: "3rem",

  svg: {
    height: "100%",
    width: "100%",
  },
});

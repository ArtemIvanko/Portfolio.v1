export type IconVariant =
  | "github"
  | "pinterest"
  | "twitter"
  | "telegram"
  | "css"
  | "figma"
  | "git"
  | "html"
  | "js"
  | "node"
  | "npm"
  | "react"
  | "yarn"
  | "sass"
  | "webpack"
  | "ts"
  | "mui"
  | "handshake"
  | "analytics";

export interface ISkillsProps {
  icon: IconVariant[];
  title: string;
  description: string;
}

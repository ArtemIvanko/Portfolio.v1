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

interface ISkillsProps {
  icon: IconVariant[];
  title: string;
  description: string;
}

export const skills: ISkillsProps[] = [
  {
    icon: ["html"],
    title: "HTML:",
    description:
      "Proficient in HTML (Hypertext Markup Language), the standard markup language for creating web pages. Knowledgeable in structuring content, organizing elements, and utilizing semantic tags to ensure accessibility and maintainability.",
  },
  {
    icon: ["css"],
    title: "CSS:",
    description:
      "Strong understanding of CSS (Cascading Style Sheets), used for styling web pages. Skilled in applying styles, creating layouts, and implementing responsive design principles to enhance the visual presentation and user experience.",
  },
  {
    icon: ["js"],
    title: "JavaScript:",
    description:
      "Deep understanding of the JavaScript programming language, including syntax, object-oriented programming, and interaction with web page elements.",
  },
  {
    icon: ["ts"],
    title: "TypeScript:",
    description:
      "Proficient in TypeScript, a strongly-typed superset of JavaScript, which enables the use of static types, enhances code readability, and provides better tooling support for large-scale JavaScript applications.",
  },
  {
    icon: ["git"],
    title: "Git:",
    description:
      "Extensive knowledge of Git, a distributed version control system. Git provides efficient tracking of code changes, branching, merging, and collaboration capabilities, ensuring better project management and facilitating teamwork among developers.",
  },
  {
    icon: ["github"],
    title: "GitHub:",
    description:
      "Experience using GitHub, a web-based platform for version control and collaboration. GitHub provides a centralized repository for storing code, managing projects, and facilitating seamless collaboration among team members.",
  },
  {
    icon: ["webpack"],
    title: "Webpack:",
    description:
      "Understanding of Webpack, a module bundler for JavaScript applications. Webpack efficiently manages and bundles various dependencies, assets, and modules, optimizing the performance and delivery of web applications.",
  },
  {
    icon: ["react"],
    title: "React:",
    description:
      "Strong expertise in React, a popular JavaScript library for building user interfaces. React enables the creation of reusable UI components, efficient rendering, and state management, making it a powerful tool for building interactive and responsive web applications.",
  },
  {
    icon: ["node"],
    title: "Node Js:",
    description:
      "Proficiency in Node.js, a JavaScript runtime environment. Node.js allows developers to run JavaScript on the server-side, enabling building scalable and efficient web applications and APIs.",
  },
  {
    icon: ["npm"],
    title: "Npm:",
    description:
      "Familiarity with npm (Node Package Manager), a package manager for JavaScript. It allows developers to easily install, manage, and share reusable code packages or libraries, making it an essential tool for building JavaScript applications.",
  },
  {
    icon: ["yarn"],
    title: "Yarn:",
    description:
      "Experience with Yarn, an alternative package manager to npm. Yarn offers faster and more reliable package installations by utilizing a local cache and parallel processing, improving the development workflow.",
  },
  {
    icon: ["sass"],
    title: "SASS and SCSS",
    description:
      "Proficiency in SASS (Syntactically Awesome Style Sheets), a CSS preprocessor. SASS extends the capabilities of CSS by adding features such as variables, mixins, and nesting, making CSS code more modular, reusable, and maintainable.",
  },
  {
    icon: ["mui"],
    title: "Material-UI",
    description:
      "Expertise in utilizing the Material-UI library, which provides pre-designed, customizable components following the Material Design guidelines. Proficient in creating modern and visually appealing user interfaces by leveraging MUI's extensive component library, theming options, and responsive design capabilities. MUI simplifies the development process by providing ready-to-use UI elements, ensuring consistency across the application",
  },
  {
    icon: ["handshake"],
    title: "Communication Skills:",
    description:
      "Strong ability to communicate effectively with team members, understand project requirements, and collaborate efficiently. Clear and concise communication is essential for successful teamwork and project execution.",
  },
  {
    icon: ["analytics"],
    title: "Analytical Skills:",
    description:
      "Excellent analytical skills for comprehending complex tasks, identifying problems, and finding effective solutions. The ability to analyze code, troubleshoot issues, and make informed decisions contributes to the overall quality and efficiency of the development process.",
  },
];

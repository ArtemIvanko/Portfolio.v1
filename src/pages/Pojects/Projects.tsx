import { useMemo } from "react";
import { Card } from "@utils/Card";
import { Typography } from "@mui/material";
import ProjectImage from "@assets/project1.png";
import styled from "@/DefaultTheme";

export const Projects = () => {
  const contentCards = useMemo(() => {
    return [
      {
        topic: "TypeScript React",
        title: "Portfolio Project",
        imgSrc: ProjectImage,
        description:
          "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
        href: "https://github.com/ArtemIvanko/Portfolio.v1",
      },
    ];
  }, []);

  return (
    <Root>
      <Typography variant="h4">Project Portfolio Showcase</Typography>
      <Typography variant="body2">
        Welcome to my frontend portfolio showcase, where I present a collection
        of my diverse and engaging projects. Explore a range of interactive web
        applications, captivating designs, and user-friendly interfaces. From
        responsive layouts to cutting-edge technologies, this portfolio
        highlights my skills and creativity in the world of frontend
        development. Discover the power of code and design as you browse through
        my projects, each demonstrating my dedication to crafting seamless
        digital experiences. Whether you're an employer, fellow developer, or
        simply curious about my work, this portfolio is an opportunity to
        witness the art and innovation behind my frontend projects. Join me on
        this journey of exploration and inspiration in the realm of web
        development.
      </Typography>
      {contentCards.map(({ topic, title, href, imgSrc, description }) => (
        <Card
          topic={topic}
          title={title}
          href={href}
          imgSrc={imgSrc}
          description={description}
        />
      ))}
    </Root>
  );
};

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

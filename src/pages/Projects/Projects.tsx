import { useCallback, useMemo, useState } from "react";
import { Card } from "@utils/Card";
import { Link, LinkColor } from "@utils/Link";
import { Icon } from "@utils/Icon";
import { Typography, Button } from "@mui/material";
import ProjectImage from "@assets/project1.png";
import styled from "@/DefaultTheme";
import { AddProjectDialog } from "@/pages/Projects/AddProjectDialog";

export const Projects = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOpenDialog = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsActive(false);
  }, []);

  const contentCards = useMemo(() => {
    return [
      {
        topic: "TypeScript React",
        title: "Portfolio Project",
        imgSrc: ProjectImage,
        description:
          "The TypeScript React Portfolio page is a visually appealing website that showcases projects using React, TypeScript, and Material-UI. It offers seamless navigation and interactive features for users to explore the Home, About, and Project pages.",
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
      <Button variant="contained" fullWidth onClick={handleOpenDialog}>
        Add Project
      </Button>
      <AddProjectDialog handleCloseDialog={handleCloseDialog} open={isActive} />
      {contentCards.map(({ topic, title, href, imgSrc, description }) => (
        <Card
          topic={topic}
          title={title}
          imgSrc={imgSrc}
          description={description}
          key={title}
        >
          <SocialContainer>
            <Icon icon="github" />
            <Button variant="contained">
              <Link href={href} color={LinkColor.Secondary}>
                Visit Project
              </Link>
            </Button>
          </SocialContainer>
        </Card>
      ))}
    </Root>
  );
};

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const SocialContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
});

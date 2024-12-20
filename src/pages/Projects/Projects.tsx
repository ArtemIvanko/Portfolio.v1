import { gql, useQuery } from "@apollo/client";
import { Card } from "@utils/Card";
import { Link, LinkColor } from "@utils/Link";
import { Icon } from "@utils/Icon";
import { Typography, Button, CircularProgress } from "@mui/material";
import styled from "@/DefaultTheme";
import { GetProjectQuery, Query } from "graphql.gen";
// import getProjects from "src/graphql/queries/GetProjects.graphql"; //TODO - Use setup .graphql imports and use them instead of inline strings

const GET_PROJECTS = gql`
  query GetProjects {
    getProjects {
      id
      topic
      title
      description
      href
      imgSrc
    }
  }
`;

export const Projects = () => {
  const { data, loading, error } = useQuery<Query>(GET_PROJECTS);
  const projects = data?.getProjects || [];

  if (loading) return <CircularProgress size="5rem" color="primary" />;
  if (error) return <p>Error loading projects: {error.message}</p>;

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
      {projects.map(
        ({ topic, title, href, imgSrc, description }: GetProjectQuery) => (
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
        )
      )}
    </Root>
  );
};

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
});

const SocialContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
});

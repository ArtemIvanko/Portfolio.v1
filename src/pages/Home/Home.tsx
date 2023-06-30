import { Button, Typography, useMediaQuery } from "@mui/material";
import { Link } from "@shared/utils/Link";
import styled from "@/DefaultTheme";

export const Home = () => {
  const isDesktopResolution = useMediaQuery(({ breakpoints }) =>
    breakpoints.up("md")
  );

  return (
    <Root>
      {isDesktopResolution && (
        <Dummy>
          Dummy placement. TODO: Put here an image or something like that
        </Dummy>
      )}
      <Container>
        <Typography variant="h4">
          Turning Vision Into Reality With Code And Design.
        </Typography>
        <Typography>
          Welcome to my portfolio, where creativity and innovation thrive.
          Explore my diverse projects, from web designs to branding, showcasing
          my attention to detail and passion for excellence.
        </Typography>
        <Typography>
          As a skilled frontend developer, I transform ideas into innovative web
          applications. Discover my expertise in React.js and web development
          through my latest projects and articles.
        </Typography>
        <Typography>Let's connect and bring your ideas to life!</Typography>
        <Typography>
          Feel free to modify this version further to fit your preferences and
          requirements.
        </Typography>
        <div>
          <StyledButton variant="contained">Resume</StyledButton>
          <Link href="mailto:tema30k@gmail.com">Contact</Link>
        </div>
      </Container>
    </Root>
  );
};

const Root = styled("div")({
  display: "flex",
  gap: "3rem",
});

const Dummy = styled("div")({
  width: "100%",
  border: "3px solid red",
});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const StyledButton = styled(Button)({
  marginRight: "1rem",
});

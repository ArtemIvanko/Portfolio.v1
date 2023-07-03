import { useCallback, useMemo } from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { Link } from "@utils/Link";
import { fileDownloadByURL } from "@utils/browser/fileDownload";
import Image from "@assets/background.jpg";
import ResumeFile from "@assets/PDF/Resume.pdf";
import styled from "@/DefaultTheme";

export const Home = () => {
  const isDesktopResolution = useMediaQuery(({ breakpoints }) =>
    breakpoints.up("md")
  );

  const cachedImageSrc = useMemo(() => Image, []);

  const handleResumeDownload = useCallback(() => {
    fileDownloadByURL({
      url: ResumeFile,
      fileName: "resume",
    });
  }, []);

  return (
    <Root>
      {isDesktopResolution && (
        <div>
          <StyledImage src={cachedImageSrc} alt="background img" />
        </div>
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
          <DownloadButton variant="contained" onClick={handleResumeDownload}>
            Resume
          </DownloadButton>
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

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "40rem",
});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const DownloadButton = styled(Button)({
  marginRight: "1rem",
});

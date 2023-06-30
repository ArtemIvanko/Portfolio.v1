import { FunctionComponent, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";
import { Footer } from "@shared/Footer";
import { Link } from "@shared/utils/Link";
import styled from "@/DefaultTheme";

export const Navigation: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Root>
      <NavBar>
        <BrandName variant="overline">Creative.js</BrandName>
        <Link href="home">Home</Link>
        <Link href="about">About</Link>
        <Link href="project">Projects</Link>
      </NavBar>
      <ContentWrapper>
        {isLoading ? (
          <CircularProgress size="5rem" color="primary" />
        ) : (
          <Outlet />
        )}
      </ContentWrapper>
      <Footer />
    </Root>
  );
};

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

const NavBar = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0.5rem",
  boxShadow: `inset 0 -1px 0 0 ${theme.palette.primary.bg}`,
  [theme.breakpoints.up("lg")]: {
    padding: "0 3.5rem",
    gap: "0.5rem",
  },
}));

const BrandName = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  marginRight: "0.5rem",
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.h4.fontSize,
    marginRight: "2.5rem",
  },
}));

const ContentWrapper = styled("main")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: "1",
  overflow: "auto",
});

import { FunctionComponent, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";
import { Footer } from "@shared/Footer";
import { Link } from "@utils/Link";
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
        <BrandName>
          <Typography variant="caption">Creative</Typography>.js
        </BrandName>
        <Link pathName="/home" href="home">
          Home
        </Link>
        <Link pathName="/about" href="about">
          About
        </Link>
        <Link pathName="/project" href="project">
          Projects
        </Link>
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
  justifyContent: "space-between",
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
  marginRight: "0.5rem",
  [theme.breakpoints.up("lg")]: {
    marginRight: "2.5rem",
    padding: "0.5rem",
  },
}));

const ContentWrapper = styled("main")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  [theme.breakpoints.up("lg")]: {
    padding: "2.5rem 5rem",
  },
}));

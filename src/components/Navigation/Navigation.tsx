import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
import styled from "@/DefaultTheme";

export const Navigation: FunctionComponent = () => (
  <Root>
    <NavBar>
      <BrandName variant="overline">Creative.js</BrandName>
      <NavLink to="home">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="project">Projects</NavLink>
    </NavBar>
    <ContentWrapper>
      <Outlet />
    </ContentWrapper>
  </Root>
);

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
});

const NavBar = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "4rem",
  width: "100%",
  padding: "0 1rem",
  gap: "1rem",
  boxShadow: `inset 0 -1px 0 0 ${theme.palette.primary.bg}`,
  [theme.breakpoints.up("lg")]: {
    padding: "0 3.5rem",
  },
}));

const NavLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontSize: theme.typography.caption.fontSize,
  "&:hover": {
    fontWeight: "600",
    textDecoration: "underline",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.h6.fontSize,
  },
}));

const BrandName = styled(Typography)(({ theme }) => ({
  lineHeight: "1.25",
  fontSize: theme.typography.h6.fontSize,
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

const ContentWrapper = styled("main")({
  flexGrow: "1",
  overflow: "auto",
});

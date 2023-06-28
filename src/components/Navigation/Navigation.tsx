import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
import styled from "@/DefaultTheme";

export const Navigation: FunctionComponent = () => (
  <Root>
    <NavBar>
      <NavLink to="home">
        <Logo variant="subtitle1">Ai</Logo>
        Home
      </NavLink>
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
  gap: "1rem",
  padding: "0.5rem",
  background: theme.palette.background.default,
  alignItems: "center",
  minHeight: "4rem",
  minWidth: "3.75rem",
}));

const NavLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const Logo = styled(Typography)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  lineHeight: "1.25",
  padding: "0.75rem",
  marginRight: "0.5rem",
}));

const ContentWrapper = styled("main")({
  flexGrow: "1",
  overflow: "auto",
});

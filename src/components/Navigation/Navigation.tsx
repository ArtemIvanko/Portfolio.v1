import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "@/DefaultTheme";

export const Navigation: FunctionComponent = () => (
  <Root>
    <NavBar>
      <NavLink to="home">
        <div>Logo placement</div>
        Home
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="project">Project</NavLink>
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
  background: theme.palette.divider,
  alignItems: "center",
  minHeight: "3rem",
  minWidth: "3.75rem",
}));

const NavLink = styled(Link)(({ theme }) => ({
  display: "flex",
  textTransform: "uppercase",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const ContentWrapper = styled("main")({
  flexGrow: "1",
  overflow: "auto",
});

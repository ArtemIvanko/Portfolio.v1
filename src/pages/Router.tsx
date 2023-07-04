import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "@shared/Navigation";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { NotFound } from "./NotFound";

export const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);

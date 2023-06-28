import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "@/components/Navigation/Navigation";
import { Home } from "./Home";
import { NotFoundPage } from "./NotFound";
import { About } from "./About";
import { Projects } from "./Pojects";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Projects />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

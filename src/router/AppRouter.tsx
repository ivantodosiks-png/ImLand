import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import TeamPage from "../pages/TeamPage";
import FoodPage from "../pages/FoodPage";
import NaturePage from "../pages/NaturePage";
import CulturePage from "../pages/CulturePage";
import TourismPage from "../pages/TourismPage";
import GalleryPage from "../pages/GalleryPage";
import LanguagePage from "../pages/LanguagePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/nature" element={<NaturePage />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/tourism" element={<TourismPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/language" element={<LanguagePage />} />
      </Route>
    </Routes>
  );
}


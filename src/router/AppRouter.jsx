import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import AboutMe from "../pages/aboutme/AboutMe";
import Business from "../pages/categories/Business";
import Entertainment from "../pages/categories/Entertainment";
import General from "../pages/categories/General";
import Health from "../pages/categories/Health";
import Science from "../pages/categories/Science";
import Search from "../pages/categories/Search";
import Sports from "../pages/categories/Sports";
import Technology from "../pages/categories/Technology";
import HomePage from "../pages/homepage/HomePage";
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/general" element={<General />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;

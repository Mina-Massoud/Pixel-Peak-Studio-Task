import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import WeatherPage from "../components/Main-Page/WeatherPage";
import CreateAnAccount from "../components/common/Create-An-Account/CreateAnAccount";

const RoutingHandler = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<WeatherPage />} />
        <Route path="create-account" element={<CreateAnAccount />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutingHandler;

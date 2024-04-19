import React from "react";
import { useQuery } from "react-query";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WeatherDetails from "../Weather-Components/WeatherDetails";
import { getLatandLon, getWeatherData } from "../../lib";
import { motion } from "framer-motion";
async function hanldeWeatherData() {
  const { lat, lon, countryName, city } = await getLatandLon();

  const weatherData = await getWeatherData({ lat, lon, countryName, city });

  return weatherData;
}

export default function WeatherPage() {
  const {
    data: weatherData,
    isLoading,
    error,
  } = useQuery("weatherData", hanldeWeatherData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gradient-bg flex-grow"
    >
      <div className="flex-grow p-4 gap-5 flex flex-col">
        <Navbar location={weatherData?.location} />
        <div className="flex-grow flex flex-col min-h-[75vh]">
          <WeatherDetails data={weatherData?.filteredData} />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import WeatherDetails from "../Weather-Components/WeatherDetails";

export default function WeatherPage() {
  return (
    <div className="flex flex-col gradient-bg flex-grow" >
      <div className="flex-grow  p-4 gap-5 flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col min-h-[75vh]">
          <WeatherDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
}

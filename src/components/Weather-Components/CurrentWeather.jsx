import React from "react";
import Sunny from "../../Icons/weather-icons/Sunny";

export default function CurrentWeather() {
  return (
    <div className="pt-[0.5em] pb-[2.2em] w-full max-w-[900px]  px-[2em] flex flex-col gap-[2.5em] card-style ">
      <div className="flex flex-col text-[0.9rem] self-start items-center">
        <h1>Current Weather</h1>
        <h1 className="font-semibold">3:00pm</h1>
      </div>
      <div className="flex items-center gap-4">
        <Sunny />
        <h1 className="text-[2em] poppins">25°C</h1>
        <p className="text-[#00000066] text-[14px]">Cloudy</p>
      </div>

      <div className="flex items-center gap-4">
        <p>There will be mostly sunny. The high will be 25°C </p>
      </div>
    </div>
  );
}

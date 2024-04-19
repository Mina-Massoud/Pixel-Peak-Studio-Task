import React from "react";
import Sunny from "../../Icons/weather-icons/Sunny";
import { formatTime } from "../../lib";

export default function CurrentWeather({
  time,
  temp,
  weather,
  description,
  tempMax,
}) {
  return (
    <div className="pt-[0.5em] pb-[2.2em] w-full md:w-[49%] md:min-w-[49%] px-[2em] flex flex-col gap-[2.5em] card-style ">
      <>
        <div className="flex flex-col text-[0.9rem] self-start items-center">
          <h1>Current Weather</h1>
          <h1 className="font-semibold">{formatTime(time)}</h1>
        </div>
        <div className="flex items-center gap-4">
          <Sunny />
          <h1 className="text-[2em] poppins">{temp}°C</h1>
          <p className="text-[#00000066] text-[14px]">{weather}</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="capitalize">
            {description}, the high will be{" "}
            <span className="font-semibold poppins">{tempMax}°C</span>
          </p>
        </div>
      </>
      
    </div>
  );
}

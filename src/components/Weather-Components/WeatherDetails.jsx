import React from "react";
import CurrentWeather from "./CurrentWeather";
import PopularTownsCard from "./Popular-Towns/PopularTownsCard";
import WeatherWidget from "./weather-widget/WeatherWidget";

export default function WeatherDetails() {
  return (
    <div className="flex w-full px-[2em] flex-grow mx-auto gap-[2em]">
      <div className="left flex flex-col gap-5 w-full">
        <div className="flex w-full items-start gap-[2em]">
          <CurrentWeather />
          <PopularTownsCard />
        </div>
        <div className="card-style graph flex-grow p-5">
          <h1>graph</h1>
        </div>
      </div>
      <WeatherWidget />
    </div>
  );
}

import React from "react";
import CurrentWeather from "./CurrentWeather";
import PopularTownsCard from "./Popular-Towns/PopularTownsCard";
import WeatherWidget from "./weather-widget/WeatherWidget";
import SkeletonLoading from "../ui/SkeletonLoading";
import Spline from "../ui/spline";

export default function WeatherDetails({ data }) {
  return (
    <div className="flex w-full px-[2em] flex-grow mx-auto gap-[2em]">
      <div className="left flex flex-col  gap-5 w-[80%]">
        <div className="flex w-full items-start justify-between">
          {data ? (
            <CurrentWeather
              time={data[0].dt_txt}
              description={data[0].weather[0].description}
              tempMax={Math.ceil(data[0].main.temp_max)}
              temp={Math.ceil(data[0].main.temp)}
              weather={data[0].weather[0].main}
            />
          ) : (
            <div className="pt-[0.5em] pb-[2.2em] w-[49%] min-w-[49%] px-[1em] flex flex-col gap-[2.5em] card-style ">
              <SkeletonLoading className="bg-gray-300  rounded-md h-[70px]" />
              <SkeletonLoading count={3} className="bg-gray-300 rounded-md " />
            </div>
          )}

          <PopularTownsCard />
        </div>
        <div className="card-style graph flex-grow p-5 flex items-center justify-center">
          <Spline />
        </div>
      </div>
      <WeatherWidget data={data} />
    </div>
  );
}

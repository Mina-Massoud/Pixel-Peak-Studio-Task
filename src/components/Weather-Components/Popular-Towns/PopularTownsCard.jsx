import React from "react";
import styles from "../../../styles/sliders/popularTownSlider.module.css";
import PopularTownSlider from "../../ui/Popular-Town-Slider/PopularTownSlider";
import TownCard from "./TownCard";
import Sunny from "../../../Icons/weather-icons/Sunny";
import Cloudy from "../../../Icons/weather-icons/Cloudy";
import Lighting from "../../../Icons/weather-icons/Lighting";
import HeavyRain from "../../../Icons/weather-icons/HeavyRain";
export default function PopularTownsCard() {
  const OPTIONS = { align: "start", dragFree: true };

  const townData = [
    {
      day: "Today(Sun)",
      date: "Mar 6",
      weatherIcon: <Sunny width={70} height={70} />,
      weatherCondition: "Sunny",
      temperature: "15-20℃",
      aqi: 67,
    },
    {
      day: "Mon",
      date: "Mar 7",
      weatherIcon: <Cloudy width={70} height={70} />,
      weatherCondition: "Cloudy",
      temperature: "16-22℃",
      aqi: 71,
    },
    {
      day: "Tue",
      date: "Mar 8",
      weatherIcon: <Lighting width={70} height={70} />,
      weatherCondition: "Lighting",
      temperature: "17-20℃",
      aqi: 65,
    },
    {
      day: "Wed",
      date: "Mar 9",
      weatherIcon: <HeavyRain width={70} height={70} />,
      weatherCondition: "Heavy Rain",
      temperature: "14-18℃",
      aqi: 70,
    },

    // Add more objects as needed
  ];

  return (
    <div className="py-[1em] w-full max-w-[650px] px-[1.2em] flex flex-col gap-[1.5em] card-style ">
      <div className="flex text-[0.98rem] poppins items-center gap-4  px-2 text-gray-500 border-b-[2px] pb-[1em] border-b-[#00000014] ">
        <h1 className="active text-[1rem]">New York</h1>
        <h1>Hangkong</h1>
        <h1>Tokyo</h1>
      </div>
      <div className="day-weather">
        <PopularTownSlider options={OPTIONS} styles={styles}>
          {townData.map((item, index) => (
            <div className={styles["embla__slide"]} key={index}>
              <TownCard
                aqi={item.aqi}
                date={item.date}
                day={item.day}
                temperature={item.temperature}
                weatherCondition={item.weatherCondition}
                weatherIcon={item.weatherIcon}
                key={index}
              />
            </div>
          ))}
        </PopularTownSlider>
      </div>
    </div>
  );
}

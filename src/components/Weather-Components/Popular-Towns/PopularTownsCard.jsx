import React, { useEffect, useState } from "react";
import styles from "../../../styles/sliders/popularTownSlider.module.css";
import PopularTownSlider from "../../ui/Popular-Town-Slider/PopularTownSlider";
import TownCard from "./TownCard";
import Sunny from "../../../Icons/weather-icons/Sunny";
import Cloudy from "../../../Icons/weather-icons/Cloudy";
import Lighting from "../../../Icons/weather-icons/Lighting";
import HeavyRain from "../../../Icons/weather-icons/HeavyRain";
import { getDayName, getWeatherData, popularTownLatLon } from "../../../lib";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import SkeletonLoading from "../../ui/SkeletonLoading";

async function fetchPopularTown(town) {
  // get the lat and lon

  const { lat, lon } = popularTownLatLon(town.name);

  const response = await getWeatherData({
    lat,
    lon,
    countryName: "USA",
    city: town.name,
  });

  return response;
}

export default function PopularTownsCard({ data }) {
  const [activeTown, setActiveTown] = useState({ name: "New York" });
  const [townData, setTownData] = useState([]);

  const {
    data: popularTownData,
    isLoading,
    error,
  } = useQuery(
    ["popularTown", activeTown.name], // Assuming activeTown has a unique ID
    () => fetchPopularTown(activeTown)
  );

  useEffect(() => {
    if (!popularTownData) return;
    setTownData(
      popularTownData.filteredData.map((item, index) => {
        const date = new Date(item.dt_txt);
        const dayOfWeek = getDayName(item.dt);
        const month = date.toLocaleString("en-US", { month: "short" });
        const dayOfMonth = date.getDate();

        let weatherIcon;
        if (item.weather[0].icon === "01d" || item.weather[0].icon === "01n") {
          weatherIcon = <Sunny width={70} height={70} />;
        } else if (
          item.weather[0].icon === "02d" ||
          item.weather[0].icon === "02n"
        ) {
          weatherIcon = <Cloudy width={70} height={70} />;
        } else if (
          item.weather[0].icon === "03d" ||
          item.weather[0].icon === "03n"
        ) {
          weatherIcon = <Lighting width={70} height={70} />;
        } else if (
          item.weather[0].icon === "04d" ||
          item.weather[0].icon === "04n"
        ) {
          weatherIcon = <HeavyRain width={70} height={70} />;
        } else {
          // Default icon if none of the above conditions match
          weatherIcon = <Sunny width={70} height={70} />;
        }

        return {
          day:
            index === 0
              ? dayOfWeek
                ? `Today(${dayOfWeek})`
                : dayOfWeek
              : dayOfWeek,
          date: `${month} ${dayOfMonth}`,
          weatherIcon: weatherIcon,
          weatherCondition: item.weather[0].description,
          temperature: `${item.main.temp_min}-${item.main.temp_max}°C`, // Assuming temp_min and temp_max are available
          aqi: item.main.humidity, // Using humidity as an example for AQI
        };
      })
    );
  }, [popularTownData]);

  // const townData = popularTownData.filteredData.map((item, index) => {
  //   const date = new Date(item.dt_txt);
  //   const dayOfWeek = getDayName(item.dt);
  //   const month = date.toLocaleString("en-US", { month: "short" });
  //   const dayOfMonth = date.getDate();

  //   let weatherIcon;
  //   if (item.weather[0].icon === "01d" || item.weather[0].icon === "01n") {
  //     weatherIcon = <Sunny width={70} height={70} />;
  //   } else if (
  //     item.weather[0].icon === "02d" ||
  //     item.weather[0].icon === "02n"
  //   ) {
  //     weatherIcon = <Cloudy width={70} height={70} />;
  //   } else if (
  //     item.weather[0].icon === "03d" ||
  //     item.weather[0].icon === "03n"
  //   ) {
  //     weatherIcon = <Lighting width={70} height={70} />;
  //   } else if (
  //     item.weather[0].icon === "04d" ||
  //     item.weather[0].icon === "04n"
  //   ) {
  //     weatherIcon = <HeavyRain width={70} height={70} />;
  //   } else {
  //     // Default icon if none of the above conditions match
  //     weatherIcon = <Sunny width={70} height={70} />;
  //   }

  //   return {
  //     day:
  //       index === 0
  //         ? dayOfWeek
  //           ? `Today(${dayOfWeek})`
  //           : dayOfWeek
  //         : dayOfWeek,
  //     date: `${month} ${dayOfMonth}`,
  //     weatherIcon: weatherIcon,
  //     weatherCondition: item.weather[0].description,
  //     temperature: `${item.main.temp_min}-${item.main.temp_max}°C`, // Assuming temp_min and temp_max are available
  //     aqi: item.main.humidity, // Using humidity as an example for AQI
  //   };
  // });

  const OPTIONS = { align: "start", dragFree: true };

  return (
    <div className="py-[1em] w-[50%] max-w-[49%] min-w-[49%] px-[1.2em] flex flex-col gap-[1.5em] card-style ">
      <div className="flex text-[0.98rem] poppins items-center gap-4 px-2 text-gray-500 border-b-[2px] pb-[1em] border-b-[#00000014] ">
        <h1
          onClick={() => {
            setActiveTown({ name: "New York" });
          }}
          className={`${
            activeTown.name === "New York" && "active"
          } text-[1rem] cursor-pointer`}
        >
          New York
        </h1>
        <h1
          className={`${
            activeTown.name === "Hongkong" && "active"
          } text-[1rem] cursor-pointer`}
          onClick={() => {
            setActiveTown({ name: "Hongkong" });
          }}
        >
          Hongkong
        </h1>
        <h1
          className={`${
            activeTown.name === "Tokyo" && "active"
          } text-[1rem] cursor-pointer`}
          onClick={() => {
            setActiveTown({ name: "Tokyo" });
          }}
        >
          Tokyo
        </h1>
      </div>
      <motion.div
        key={activeTown.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="day-weather"
      >
        <PopularTownSlider options={OPTIONS} styles={styles}>
          {townData.length > 0 ? (
            townData.map((item, index) => (
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
            ))
          ) : (
            <>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div
                    className={styles["embla__slide"]}
                    key={`slide_${index}`}
                  >
                    <SkeletonLoading className="bg-gray-300 min-h-[50px] min-w-[100px] my-[1em] mr-[2em]" />
                    <SkeletonLoading
                      count={3}
                      className="bg-gray-300 mt-[0.5em]"
                    />
                  </div>
                ))}
            </>
          )}
        </PopularTownSlider>
      </motion.div>
    </div>
  );
}

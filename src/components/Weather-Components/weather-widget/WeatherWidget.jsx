import React, { useEffect, useState } from "react";
import SunnyWidget from "../../../Icons/weather-icons/weather-widget/SunnyWidget";
import WidgetSliderItem from "./WidgetSliderItem";
import WidgetSlider from "../../ui/Widget-Slider/WidgetSlider";
import styles from "../../../styles/sliders/widget-slider.module.css";
import RainWidget from "../../../Icons/weather-icons/weather-widget/RainWidget";
import PartlyRainy from "../../../Icons/weather-icons/weather-widget/PartlyRainy";
import PartlySunny from "../../../Icons/weather-icons/weather-widget/PartlySunny";
import Ligthing from "../../../Icons/weather-icons/weather-widget/Ligthing";
import Clock from "../../../Icons/Clock";
import Temperature from "../../../Icons/Temperature";
import Wind from "../../../Icons/Wind";
import Water_droplet from "../../../Icons/Water_droplet";
import { formatTime, getDayName } from "../../../lib";
import { motion } from "framer-motion";

const mapWeatherIcon = (weatherId) => {
  if (weatherId >= 200 && weatherId < 500) {
    return <Ligthing />;
  } else if (weatherId >= 501 && weatherId < 600) {
    return <RainWidget />;
  } else if (weatherId >= 600 && weatherId < 700) {
    return <SnowWidget />;
  } else if (weatherId >= 700 && weatherId < 800) {
    return <PartlyRainy />;
  } else if (weatherId === 800) {
    return <SunnyWidget />;
  } else if (weatherId >= 801 && weatherId < 900) {
    return <PartlySunny />;
  }
};

export default function WeatherWidget({ data }) {
  const [activeDay, setActiveDay] = useState({
    id: "",
    airConditions: [],
    time: "",
  });
  const [townData, setTownData] = useState([]);

  useEffect(() => {
    if (!data) return;
    setTownData(
      data.map((day) => ({
        //get first 3chars of day name
        day: getDayName(day.dt).slice(0, 3),
        weatherIcon: mapWeatherIcon(day.weather[0].id),
        id: day.dt,
        time: day.dt_txt,
        airConditions: [
          {
            title: "Real Feel",
            icon: <Temperature />,
            value: `${day.main.feels_like}°C`,
          },
          {
            title: "Wind",
            icon: <Wind />,
            value: `${day.wind.speed}km/h`,
          },
          {
            title: "Chance of rain",
            icon: <Water_droplet />,
            value: `${day.pop}%`,
          },
          {
            title: "UV Index",
            icon: <SunnyWidget />,
            value: "Low ", // temp for now,
          },
        ],
      }))
    );
  }, [data]);

  useEffect(() => {
    if (townData.length === 0) return;
    setActiveDay({
      airConditions: townData[0].airConditions,
      id: townData[0].id,
      time: townData[0].time,
    }); // default select first day
  }, [townData, data]);

  const OPTIONS = { align: "center", dragFree: true };

  if (!styles) {
    return null;
  }

  return (
    <div className="right w-[20%] max-w-[20%] card-style p-4 min-h-full">
      <WidgetSlider options={OPTIONS} styles={styles}>
        {townData.length > 0 &&
          townData.map((item, index) => (
            <div className={styles["embla__slide"]} key={item.id}>
              <WidgetSliderItem
                key={item.id}
                onClick={() => setActiveDay(item)}
                className={`min-w-[50px] transition duration-[500] ${
                  activeDay.id === item.id ? "opacity-[1]" : "opacity-[0.5]"
                }`}
                day={item.day}
                weatherIcon={item.weatherIcon}
              />
            </div>
          ))}
      </WidgetSlider>

      <div className="flex items-center justify-center my-[1.2em]">
        <Clock width={20} height={20} />
        <h1 className="ml-[0.5em] uppercase text-[1.1rem] font-semibold">
          {formatTime(activeDay?.time)}
        </h1>
      </div>

      <div className="flex flex-col">
        <h2 className="capitalize font-bold">AIR CONDITIONS</h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={activeDay.id}
          className="flex flex-col gap-5 my-[1em]"
        >
          {activeDay?.airConditions?.length > 0 &&
            activeDay.airConditions.map((item, index) => {
              return (
                <div key={item.value} className="item flex items-center gap-4">
                  {item.icon}
                  <div className="flex font-semibold flex-col">
                    <h1 className="text-[0.9rem]">{item.title}</h1>
                    <h1 className="text-[1.1rem]">{item.value}</h1>
                  </div>
                </div>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
}

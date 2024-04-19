import React from "react";
import SunnyWidget from "../../../Icons/weather-icons/weather-widget/SunnyWidget";
import WidgetSliderItem from "./WidgetSliderItem";
import WidgetSlider from "../../ui/Widget-Slider/WidgetSlider";
import styles from "../../../styles/sliders/widget-slider.module.css";
import RainWidget from "../../../Icons/weather-icons/weather-widget/RainWidget";
import PartlyRainy from "../../../Icons/weather-icons/weather-widget/PartlyRainy";
import Lighting from "../../../Icons/weather-icons/Lighting";
import PartlySunny from "../../../Icons/weather-icons/weather-widget/PartlySunny";
import Ligthing from "../../../Icons/weather-icons/weather-widget/Ligthing";
import Clock from "../../../Icons/Clock";
import Temperature from "../../../Icons/Temperature";
import Wind from "../../../Icons/Wind";
import Water_droplet from "../../../Icons/Water_droplet";
export default function WeatherWidget() {
  const townData = [
    {
      day: "FRI",
      weatherIcon: <SunnyWidget width="35" height="35" />,
    },
    {
      day: "SAT",
      weatherIcon: <RainWidget width="35" height="35" />,
    },
    {
      day: "SUN",
      weatherIcon: <PartlyRainy width="35" height="35" />,
    },
    {
      day: "MON",
      weatherIcon: <Ligthing width="35" height="35" />,
    },
    { day: "TUE", weatherIcon: <PartlySunny width="35" height="35" /> },
  ];

  const OPTIONS = { align: "center", dragFree: true };

  if (!styles) {
    return null;
  }

  const AIRCONDITONS = [
    { title: "Real Feel", value: "25°C", icon: <Temperature /> },
    { title: "Wind", value: "10km/h", icon: <Wind /> },
    { title: "Chance of rain", value: "2%", icon: <Water_droplet /> },
    { title: "UV Index", value: "Low", icon: <SunnyWidget /> },
  ];

  return (
    <div className="right w-[30%] min-w-[300px] card-style p-4 min-h-full">
      <WidgetSlider options={OPTIONS} styles={styles}>
        {townData.map((item, index) => (
          <div className={styles["embla__slide"]} key={index}>
            <WidgetSliderItem
              key={index}
              day={item.day}
              weatherIcon={item.weatherIcon}
            />
          </div>
        ))}
      </WidgetSlider>

      <div className="flex items-center justify-center my-[1.2em]">
        <Clock width={20} height={20} />
        <h1 className="ml-[0.5em] uppercase text-[1.1rem] font-semibold">
          3:00pm
        </h1>
      </div>

      <div className="flex flex-col">
        <h2 className="capitalize font-bold">AIR CONDITIONS</h2>

        <div className="flex flex-col gap-5 my-[1em]">
          {AIRCONDITONS.map((item, index) => {
            return (
              <div className="item flex items-center gap-4">
                {item.icon}
                <div className="flex font-semibold flex-col">
                  <h1 className="text-[0.9rem]">{item.title}</h1>
                  <h1 className="text-[1.1rem]">{item.value}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import SunnyWidget from "../../../Icons/weather-icons/weather-widget/SunnyWidget";

export default function WidgetSliderItem({ day, weatherIcon }) {
  return (
    <div className="min-w-[50px]">
      <h1>{day}</h1>
      {weatherIcon}
    </div>
  );
}

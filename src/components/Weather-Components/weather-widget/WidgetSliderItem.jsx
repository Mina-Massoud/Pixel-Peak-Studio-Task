import React from "react";
import SunnyWidget from "../../../Icons/weather-icons/weather-widget/SunnyWidget";

export default function WidgetSliderItem({ day, weatherIcon, ...props }) {
  return (
    <div {...props}>
      <h1>{day}</h1>
      {weatherIcon}
    </div>
  );
}

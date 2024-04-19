import React from "react";


export default function TownCard({ day, date, weatherIcon, weatherCondition, temperature, aqi }) {
  return (
    <div className="flex-col flex items-center">
      <h2 className="font-semibold">{day}</h2>
      <p className="text-gray-500">{date}</p>
      {weatherIcon}
      <h2 className="font-semibold text-center text-[0.8rem] mt-[0.5em] capitalize">{weatherCondition}</h2>
      <div className="flex flex-col text-center items-center mt-[0.5em]">
        <p>{temperature}</p>
        <p>AQI {aqi}</p>
      </div>
    </div>
  );
}

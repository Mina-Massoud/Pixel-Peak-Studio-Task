import axios from "axios";

export async function getLatandLon() {
  return axios
    .get("https://ipapi.co/json/")
    .then((response) => {
      return {
        lat: response.data.latitude,
        lon: response.data.longitude,
        countryName: response.data.country,
        city: response.data.city,
      };
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getWeatherData({ lat, lon, countryName, city }) {
  if (!lat || !lon) {
    return 0;
  }
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0bbc2b3658db380a029661dcfdaf34f4&units=metric`
    );
    const filteredData = response.data.list.filter((item, index, array) => {
      if (index === 0) return true;

      const currentItemDate = new Date(item.dt_txt).getDate();
      const previousItemDate = new Date(array[index - 1].dt_txt).getDate();

      return currentItemDate !== previousItemDate;
    });
    return { filteredData: filteredData, location: { countryName, city } };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function popularTownLatLon(townName) {
  let lat, lon;
  if (townName === "New York") {
    lat = 40.7128;
    lon = -74.006;
  } else if (townName === "Hongkong") {
    lat = 22.3193;
    lon = 114.1694;
  } else if (townName === "Tokyo") {
    lat = 35.6528;
    lon = 139.8395;
  }
  return { lat, lon };
}

export const getDayName = (timestamp) => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(timestamp * 1000);
  const dayIndex = date.getDay();

  return dayNames[dayIndex];
};

export const formatTime = (date) => {
  const dateTime = new Date(date);

  const options = { hour: "numeric", minute: "2-digit", hour12: true };
  const formattedTime = dateTime.toLocaleTimeString("en-US", options);

  return formattedTime;
};

export async function get24hCast(lat, lon) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0bbc2b3658db380a029661dcfdaf34f4&units=metric`
    );
    const currentTime = Date.now() / 1000;
    const next24Hours = currentTime + 24 * 60 * 60;

    const filteredData = response.data.list.filter((item) => {
      const timestamp = item.dt;
      return timestamp >= currentTime && timestamp <= next24Hours;
    });

    return filteredData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const time2digit = (dt) => {
  const date = new Date(dt * 1000);
  const hours = date.getHours();
  return `${hours}`;
};

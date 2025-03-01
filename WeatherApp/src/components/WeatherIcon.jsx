import React from "react";
import moonb from "../assets/moonb.png";
import search from "../assets/search.png";
import cloudy from "../assets/cloudy.png";
import foggy from "../assets/foggy.png";
import heavyRain from "../assets/heavy-rain.png";
import snow from "../assets/snow.png";
import sunny from "../assets/sun.png";
import thunderstorm from "../assets/thunderstorm.png";
import tornado from "../assets/tornado.png";
import wind from "../assets/wind.png";
import humidity from "../assets/drop.png";
import danger from "../assets/exclamation.png";
import graph from "../assets/analytics.png";

const weatherImages = {
  cloudy,
  foggy,
  heavyRain,
  snow,
  sunny,
  thunderstorm,
  tornado,
  wind,
  humidity,
  danger,
  graph,
  moonb,
  search,
};

const WeatherIcon = ({ condition, size = "10%" }) => {
  const imageSrc = weatherImages[condition] || sunny; // Default to sunny if not found

  return (
    <img
      src={imageSrc}
      alt={condition}
      className="object-contain"
      style={{ width: size, height: "auto" }}
    />
  );
};

export default WeatherIcon;

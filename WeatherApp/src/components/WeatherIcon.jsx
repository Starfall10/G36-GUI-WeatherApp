import React from "react";
import cloudy from "../assets/cloudy.png";
import foggy from "../assets/foggy.png";
import heavyRain from "../assets/heavy-rain.png";
import snow from "../assets/snow.png";
import sunny from "../assets/sun.png";

const weatherImages = {
  cloudy,
  foggy,
  "heavy-rain": heavyRain,
  snow,
  sunny,
};

const WeatherIcon = ({ condition, size = 64 }) => {
  const imageSrc = weatherImages[condition] || sunny; // Default to sunny if not found

  return <img src={imageSrc} alt={condition} width={size} height={size} />;
};

export default WeatherIcon;

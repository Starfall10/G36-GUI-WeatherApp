import React, { useState, useEffect } from "react";
import "./styles/HourlyTemp.css";
import WeatherIcon from "./WeatherIcon";
import "./styles/darkmode.css";
import { useTranslation } from "react-i18next";
import snowIcon from "/src/assets/snow.png";
import cloudyIcon from "/src/assets/cloudy.png";
import sunnyIcon from "/src/assets/sun.png";
import rainIcon from "/src/assets/heavy-rain.png";

const HourlyTemp = ({ weatherData }) => {
  if (
    !weatherData ||
    !weatherData.hourlyTemperature ||
    !weatherData.hourlyTime
  ) {
    return <p>Loading hourly forecast...</p>;
  }

  // Get current UTC time and adjust to city's local time + 1 hour
  const nowUTC = new Date();
  const localTime = new Date(
    nowUTC.getTime() + weatherData.timezoneOffset * 1000
  );
  const currentHour = localTime.getHours() + 1;

  // Find the closest hourly forecast index
  const startIndex = weatherData.hourlyTime.findIndex((time) => {
    const localForecastTime = new Date(
      new Date(time).getTime() + weatherData.timezoneOffset * 1000
    );
    return localForecastTime.getHours() >= currentHour;
  });

  // If no forecast data found for current hour, start from the first hour
  const validStartIndex = startIndex >= 0 ? startIndex : 0;

  // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
  const [isDarkMode, setIsDarkMode] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  // Function to determine the correct weather icon
  const getWeatherIcon = (temperature, precipitation) => {
    if (precipitation > 0) return rainIcon;
    if (temperature <= 0) return snowIcon;
    if (temperature > 0 && temperature < 25) return cloudyIcon;
    return sunnyIcon;
  };

  return (
    <div className="tempContainer">
      <div className="hourlyTemp">
        <h2>{t("hourly_forecast")}</h2>
        <div className="content">
          {weatherData.hourlyTemperature
            .slice(validStartIndex, validStartIndex + 6)
            .map((temp, index) => {
              const precipitation = weatherData.hourlyPrecipitation
                ? weatherData.hourlyPrecipitation[validStartIndex + index]
                : 0; // Default to 0 if precipitation data is missing

              return (
                <div className="card" key={index}>
                  <img
                    src={getWeatherIcon(temp, precipitation)}
                    alt="Weather Icon"
                    width={50}
                  />
                  <div className="temp">{Math.round(temp)}°C</div>
                  <div className="time">
                    {new Date(
                      new Date(
                        weatherData.hourlyTime[validStartIndex + index]
                      ).getTime() +
                        weatherData.timezoneOffset * 1000
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HourlyTemp;

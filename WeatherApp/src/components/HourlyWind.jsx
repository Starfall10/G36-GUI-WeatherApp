import React, { useState, useEffect } from "react";
import "./styles/HourlyWind.css";
import WeatherIcon from "./WeatherIcon";
import "./styles/darkmode.css";
import { useTranslation } from "react-i18next";
import windIcon from "/src/assets/moving_wind.gif";

const HourlyWind = ({ weatherData }) => {
  const [isDarkMode] = useState(false); // state to manage the dark mode
  const { t } = useTranslation(); // state to manage the text change using the function 't'

  // useEffect used to apply the dark/light mode to the body when clicked on the toggle
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  if (!weatherData || !weatherData.hourlyWindSpeed || !weatherData.hourlyTime) {
    return <p>{t("Loading_hourly_wind_data")}</p>;
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

  return (
    <div className="windContainer">
      <div className="hourlyWind">
        <h2>{t("hourly_windspeed")}</h2>
        <div className="content">
          {weatherData.hourlyWindSpeed
            .slice(validStartIndex, validStartIndex + 6)
            .map((speed, index) => (
              <div className="card" key={index}>
                <img src={windIcon} alt="Wind Icon" className="windIcon" />
                <div className="speed">{Math.round(speed)} km/h</div>
                <div className="time">
                  {new Date(
                    new Date(
                      weatherData.hourlyTime[validStartIndex + index]
                    ).getTime() +
                      weatherData.timezoneOffset * 1000
                  ).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyWind;

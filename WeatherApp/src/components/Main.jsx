import React, { useState, useEffect } from "react";
import "./styles/Main.css";
import WeatherIcon from "./WeatherIcon";
import "./styles/darkmode.css";
import { useTranslation } from 'react-i18next';

const Main = ({ city, weatherData }) => {
  const [isDarkMode] = useState(false);
   const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    if (weatherData && weatherData.timezoneOffset !== undefined) {
      const updateTime = () => {
        const nowUTC = new Date().getTime();
        const localTimestamp = nowUTC + weatherData.timezoneOffset * 1000;
        const localTimeDate = new Date(localTimestamp);

        const options = {
          weekday: "short",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };

        let formattedTime = new Intl.DateTimeFormat("en-US", options).format(
          localTimeDate
        );
        formattedTime = formattedTime.replace(" at", " "); // Format cleanup

        setLocalTime(formattedTime);
      };

      updateTime();
      const interval = setInterval(updateTime, 1000);

      return () => clearInterval(interval);
    }
  }, [weatherData]);

  return (
    <div className="main_container">
      <div className="main">
        <div className="date_time">
          <p>{localTime || t ("fetching_time")}</p>
        </div>
        {weatherData ? (
          <>
            <div className="weather">
              <WeatherIcon condition="cloudy" size={225} />
              <div>
                <h1>{t ("temperature", {value: weatherData.temperature})}</h1>
                <p>{city}</p>
              </div>
            </div>
            <div className="high_low">
              <p>H: {weatherData.high}°C</p>
              <p>L: {weatherData.low}°C</p>
            </div>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default Main;

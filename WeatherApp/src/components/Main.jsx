import React, { useState, useEffect } from "react";
import "./styles/Main.css";
import "./styles/darkmode.css";
import snowIcon from "/src/assets/snow.png";
import cloudyIcon from "/src/assets/cloudy.png";
import sunnyIcon from "/src/assets/sun.png";
import rainIcon from "/src/assets/heavy-rain.png";

const Main = ({ city, weatherData }) => {
  const [isDarkMode] = useState(false);

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

        let formattedTime = new Intl.DateTimeFormat("en-US", options).format(localTimeDate);
        formattedTime = formattedTime.replace(" at", " ");

        setLocalTime(formattedTime);
      };

      updateTime();
      const interval = setInterval(updateTime, 1000);

      return () => clearInterval(interval);
    }
  }, [weatherData]);

  // Function to determine weather icon based on temperature and condition
  const getWeatherIcon = (temperature, precipitation) => {
    if (precipitation > 0) return rainIcon; // Show rain icon if precipitation is above 0
    if (temperature <= 0) return snowIcon;
    if (temperature > 0 && temperature < 25) return cloudyIcon;
    return sunnyIcon;
  };

  return (
    <div className="main_container">
      <div className="main">
        <div className="date_time">
          <p>{localTime || "Fetching time..."}</p>
        </div>
        {weatherData ? (
          <>
            <div className="weather">
              <img
                src={getWeatherIcon(weatherData.temperature, weatherData.precipitation)}
                alt="Weather Icon"
                width={225}
              />
              <div>
                <h1>{weatherData.temperature}°C</h1>
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

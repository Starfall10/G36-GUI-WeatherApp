import React, { useState, useEffect } from "react";
import "./styles/Main.css";
import WeatherIcon from "./WeatherIcon";

const Main = ({ city, weatherData }) => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    if (weatherData && weatherData.timezone_offset !== undefined) {
      const updateTime = () => {
        const now = new Date();
        const localTime = new Date(now.getTime() + weatherData.timezone_offset * 1000);

        const options = {
          weekday: "short",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        };
          let formattedTime = new Intl.DateTimeFormat("en-US", options).format(localTime);

          formattedTime = formattedTime.replace(" at", " ");

          setLocalTime(formattedTime);
      };

      updateTime();
      const interval = setInterval(updateTime, 1000); // Update time every second
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [weatherData]);

  return (
    <div className="main_container">
      <div className="main">
        <div className="date_time">
          <p>{localTime || "Fetching time..."}</p>
        </div>
        {weatherData ? (
          <>
            <div className="weather">
              <WeatherIcon condition="cloudy" size={225} />
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

import React, { useEffect, useState } from "react";
import "./styles/Main.css";
import Header from "./Header";
import WeatherIcon from "./WeatherIcon";
import cloudyIcon from "../assets/cloudy.png";

const Main = () => {
  const [weatherData, setWeatherData] = useState(null);

  const search = async (city) => {
    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        high: Math.floor(data.main.temp_max),
        low: Math.floor(data.main.temp_min),
        icon: cloudyIcon,
      });
    } catch (error) {
      setWeatherData(null);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("New York");
  }, []);

  return (
    <div className="main_container">
      <div className="main">
        <div className="date_time">
          <p>Fri, 28 February, 2025</p>
          <p>1:34 PM</p>
        </div>
        {weatherData ? (
          <>
            <div className="weather">
              <WeatherIcon condition="cloudy" size={225} />
              <div>
                <h1>{weatherData.temperature}°C</h1>
                <p>{weatherData.location}</p>
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

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Mid from "./components/Mid";
import Widget from "./components/Widget";

const App = () => {
  const [city, setCity] = useState("Florida"); //Default city
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    if (!city.trim()) {
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
        temperature: Math.floor(data.main.temp),
        high: Math.floor(data.main.temp_max),
        low: Math.floor(data.main.temp_min),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        precipitation: data.rain ? data.rain["1h"] || 0 : 0,
        timezone_offset: data.timezone || 0, // Fetches timezone offset from API
      });

      setCity(data.name);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

    // Function to determine background image
    const getBackgroundImage = () => {
      if (!weatherData) return "cloudy.jpg"; // Default image

      const temp = weatherData.temperature;
      const condition = weatherData.weatherCondition.toLowerCase();

      if (condition.includes("rain")) return "rain.jpg"; // Show rain background
      if (condition.includes("snow")) return "snow.jpg"; // Show snow background

      // If no rain/snow, change based on temperature
      if (temp >= 30) return "hot.jpg"; // Hot weather image
      if (temp >= 15) return "warm.jpg"; // Warm weather image
      return "cold.jpg"; // Cold weather image
    };

//Fetch weather data when the app loads
  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <div className="app">
      <Header onSearch={fetchWeather} /> {/* Pass fetchWeather to Header */}
      <Mid city={city} weatherData={weatherData} /> {/* Pass data to Mid */}
      <Widget city={city} weatherData={weatherData} /> {/* Pass data to Widget */}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Mid from "./components/Mid";
import Widget from "./components/Widget";

const App = () => {
  const [city, setCity] = useState("Florida"); // Default city
  const [weatherData, setWeatherData] = useState(null);

const fetchWeather = async (city) => {
  if (!city.trim()) {
    alert("Please enter a city name");
    return;
  }

  try {
    // Fetch current weather data from OpenWeatherMap
    const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_KEY}`;
    const openWeatherRes = await fetch(openWeatherURL);
    if (!openWeatherRes.ok) throw new Error("Failed to fetch weather data");

    const openWeatherData = await openWeatherRes.json();
    const { lat, lon } = openWeatherData.coord;

    // Fetch hourly data from Open-Meteo
    const openMeteoURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,wind_speed_10m&timezone=auto`;
    const openMeteoRes = await fetch(openMeteoURL);
    if (!openMeteoRes.ok) throw new Error("Failed to fetch hourly forecast");

    const openMeteoData = await openMeteoRes.json();

    console.log('Open-Meteo Data:', openMeteoData); // Log Open-Meteo data for debugging

    // Combine data from both APIs
    setWeatherData({
      temperature: Math.floor(openWeatherData.main.temp),
      high: Math.floor(openWeatherData.main.temp_max),
      low: Math.floor(openWeatherData.main.temp_min),
      humidity: openWeatherData.main.humidity,
      windSpeed: openWeatherData.wind.speed,
      precipitation: openWeatherData.rain ? openWeatherData.rain["1h"] || 0 : 0,
      timezoneOffset: openWeatherData.timezone || 0,
      hourlyTemperature: openMeteoData.hourly.temperature_2m,
      hourlyWindSpeed: openMeteoData.hourly.wind_speed_10m,
      hourlyTime: openMeteoData.hourly.time,
    });

    setCity(openWeatherData.name);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data. Please try again.");
    setWeatherData(null);
  }
};

  // Fetch weather data when the app loads
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

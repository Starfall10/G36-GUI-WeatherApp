import React from "react";
import "./styles/HourlyTemp.css";
import WeatherIcon from "./WeatherIcon";

const HourlyTemp = () => {
  return (
    <div className="tempContainer">
      <div className="hourlyTemp">
        <h2>Hourly Forecast</h2>
        <div className="content">
          <div className="card">
            <WeatherIcon condition="cloudy" size="clamp(3rem, 50%, 8rem)" />
            <div className="temp">20°C</div>
            <div className="time">Now</div>
          </div>
          <div className="card">
            <WeatherIcon condition="cloudy" size="clamp(3rem, 50%, 8rem)" />
            <div className="temp">21°C</div>
            <div className="time">12:00</div>
          </div>
          <div className="card">
            <WeatherIcon condition="foggy" size="clamp(3rem, 50%, 8rem)" />
            <div className="temp">22°C</div>
            <div className="time">14:00</div>
          </div>
          <div className="card">
            <WeatherIcon condition="foggy" size="clamp(3rem, 50%, 8rem)" />
            <div className="temp">22°C</div>
            <div className="time">15:00</div>
          </div>
          <div className="card">
            <WeatherIcon condition="tornado" size="clamp(3rem, 50%, 8rem)" />
            <div className="temp">24°C</div>
            <div className="time">16:00</div>
          </div>
          <div className="card">
            <WeatherIcon
              condition="thunderstorm"
              size="clamp(3rem, 50%, 8rem)"
            />
            <div className="temp">24°C</div>
            <div className="time">16:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyTemp;

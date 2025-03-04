import React, {useState, useEffect} from "react";
import "./styles/HourlyWind.css";
import WeatherIcon from "./WeatherIcon";
import "./styles/darkmode.css";

const HourlyWind = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
    
  useEffect(() => {
  document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);
  
  return (
    <div className="windContainer">
      <div className="hourlyWind">
        <h2>Hourly Windspeed</h2>
        <div className="content">
          <div className="card">
            <WeatherIcon condition="wind" size="clamp(3rem, 50%, 8rem)" />
            <div className="speed">4 MPH</div>
            <div className="time">Now</div>
          </div>
          <div className="card">
            <WeatherIcon condition="wind" size="clamp(3rem, 50%, 8rem)" />
            <div className="speed">4 MPH</div>
            <div className="time">12:00</div>
          </div>
          <div className="card">
            <WeatherIcon condition="wind" size="clamp(3rem, 50%, 8rem)" />
            <div className="speed">5 MPH</div>
            <div className="time">14:00</div>
          </div>
          <div className="card">
            <WeatherIcon condition="wind" size="clamp(3rem, 50%, 8rem)" />
            <div className="speed">5 MPH</div>
            <div className="time">15:00</div>
          </div>
          <div className="card">
            <WeatherIcon condition="wind" size="clamp(3rem, 50%, 8rem)" />
            <div className="speed">6 MPH</div>
            <div className="time">16:00</div>
          </div>
          <div className="card">
            <WeatherIcon condition="wind" size="clamp(3rem, 50%, 8rem)" />
            <div className="speed">6 MPH</div>
            <div className="time">16:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyWind;

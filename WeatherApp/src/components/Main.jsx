import React from "react";
import "./styles/Main.css";
import WeatherIcon from "./WeatherIcon";

const Main = () => {
  return (
    <div className="main_container">
      <div className="main">
        <div className="date_time">
          <p>Fri, 28 February, 2025</p>
          <p>1:34 PM</p>
        </div>
        <div className="weather">
          <WeatherIcon condition="cloudy" size="clamp(4rem, 50%, 15rem)" />
          <div>
            <h1>16°C</h1>
            <p>Tower Hamlets</p>
          </div>
        </div>
        <div className="high_low">
          <p>H: 18°C</p>
          <p>L: 10°C</p>
        </div>
      </div>
    </div>
  );
};

export default Main;

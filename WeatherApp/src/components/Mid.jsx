import React, { useState, useEffect } from "react";
import Main from "./Main";
import HourlyTemp from "./HourlyTemp";
import HourlyWind from "./HourlyWind";
import "./styles/Mid.css";
import "./styles/darkmode.css";

const Mid = ({ city, weatherData }) => {
  const [isDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className="midContainer">
      <div className="div1">
        <Main city={city} weatherData={weatherData} />
      </div>
      <div className="div2">
        <div className="div3">
          <HourlyTemp city={city} weatherData={weatherData} />
        </div>
        <div className="div4">
          <HourlyWind city={city} weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default Mid;

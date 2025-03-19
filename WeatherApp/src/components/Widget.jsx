import React, { useState, useEffect } from "react";
import "./styles/Widget.css";
import WeatherIcon from "./WeatherIcon";
import "./styles/darkmode.css";
import Main from "./Main";

const Widget = ({ city, weatherData }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className="widget_container">
      <div className="widget">
        <div className="graphs">
          <div>
            <WeatherIcon condition="graph" size={140} />
            <WeatherIcon condition="graph" size={140} />
            <WeatherIcon condition="graph" size={140} />
            <WeatherIcon condition="graph" size={140} />
          </div>
        </div>
        <div className="extra">
          {weatherData ? (
            <>
              <div className="extraCard">
                <WeatherIcon
                  condition="humidity"
                  size="clamp(3rem, 40%, 8rem)"
                />
                <div>
                  <h1>Humidity</h1>
                  <p>{weatherData.humidity}%</p>
                </div>
              </div>
              <div className="extraCard">
                <WeatherIcon
                  condition="heavyRain"
                  size="clamp(3rem, 40%, 8rem)"
                />
                <div>
                  <h1>Precipitation</h1>
                  <p>{weatherData.precipitation} mm</p>
                </div>
              </div>
              <div className="extraCard">
                <WeatherIcon condition="wind" size="clamp(3rem, 40%, 8rem)" />
                <div>
                  <h1>Wind Speed</h1>
                  <p>{weatherData.windSpeed} m/s</p>
                </div>
              </div>
            </>
          ) : (
            <p>Loading weather details...</p>
          )}
        </div>
      </div>

      {/* Ensure Main component gets the weatherData including precipitation */}
      {/* <Main city={city} weatherData={weatherData} /> */}
    </div>
  );
};

export default Widget;

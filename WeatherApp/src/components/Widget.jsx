import React from "react";
import "./styles/Widget.css";
import WeatherIcon from "./WeatherIcon";

const Widget = ({ city, weatherData }) => {
  return (
    <div className="widget_container">
      <div className="widget">
           <div className="graphs">
                <div>
                  <WeatherIcon condition="graph" size={140} />
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
                <WeatherIcon condition="humidity" size="clamp(3rem, 40%, 8rem)" />
                <div>
                  <h1>Humidity</h1>
                  <p>{weatherData.humidity}%</p>
                </div>
              </div>
              <div className="extraCard">
                <WeatherIcon condition="heavyRain" size="clamp(3rem, 40%, 8rem)" />
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
    </div>
  );
};

export default Widget;

import React from "react";
import "./styles/Widget.css";
import WeatherIcon from "./WeatherIcon";

const Widget = () => {
  return (
    <div className="widget_container">
      <div className="widget">
        <div className="graphs">
          <div className="graph_container">
            <div>
              <WeatherIcon condition="graph" size="clamp(3rem, 100%, 8rem)" />
            </div>
            <div>
              <WeatherIcon condition="graph" size="clamp(3rem, 100%, 8rem)" />
            </div>
            <div>
              <WeatherIcon condition="graph" size="clamp(3rem, 100%, 8rem)" />
            </div>
            <div>
              <WeatherIcon condition="graph" size="clamp(3rem, 100%, 8rem)" />
            </div>
            <div>
              <WeatherIcon condition="graph" size="clamp(3rem, 100%, 8rem)" />
            </div>
          </div>
        </div>
        <div className="extra">
          <div className="extraCard">
            <WeatherIcon condition="humidity" size="clamp(3rem, 40%, 8rem)" />
            <div>
              <h1>Humidity</h1>
              <p>55%</p>
            </div>
          </div>
          <div className="extraCard">
            <WeatherIcon condition="heavyRain" size="clamp(3rem, 40%, 8rem)" />
            <div>
              <h1>Precipitation</h1>
              <p>55%</p>
            </div>
          </div>
          <div className="extraCard">
            <WeatherIcon condition="danger" size="clamp(3rem, 40%, 8rem)" />
            <div>
              <h1>Danger Level</h1>
              <p>Low</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;

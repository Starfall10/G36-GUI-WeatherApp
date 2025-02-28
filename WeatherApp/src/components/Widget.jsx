import React from "react";
import "./styles/Widget.css";
import WeatherIcon from "./WeatherIcon";

const Widget = () => {
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
          <div className="extraCard">
            <WeatherIcon condition="humidity" size={100} />
            <div>
              <h1>Humidity</h1>
              <p>55%</p>
            </div>
          </div>
          <div className="extraCard">
            <WeatherIcon condition="heavyRain" size={100} />
            <div>
              <h1>Precipitation</h1>
              <p>55%</p>
            </div>
          </div>
          <div className="extraCard">
            <WeatherIcon condition="danger" size={100} />
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

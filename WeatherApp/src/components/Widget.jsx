import React, { useState, useEffect } from "react";
import "./styles/Widget.css";
import WeatherIcon from "./WeatherIcon";
import "./styles/darkmode.css";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line no-unused-vars
const Widget = ({ city, weatherData }) => {
  // eslint-disable-next-line no-unused-vars
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useTranslation();

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
                  <h1>{t("humidity")}</h1>
                  <p>{weatherData.humidity}%</p>
                </div>
              </div>
              <div className="extraCard">
                <WeatherIcon
                  condition="heavyRain"
                  size="clamp(3rem, 40%, 8rem)"
                />
                <div>
                  <h1>{t("precipitation")}</h1>
                  <p>{weatherData.precipitation} mm</p>
                </div>
              </div>
              <div className="extraCard">
                <WeatherIcon condition="wind" size="clamp(3rem, 40%, 8rem)" />
                <div>
                  <h1>{t("wind_speed")}</h1>
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

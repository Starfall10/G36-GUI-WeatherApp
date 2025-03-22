import { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.fullscreen";
import "leaflet.fullscreen/Control.FullScreen.css";
import L from "leaflet";
import "./styles/WeatherMap.css";
import { useTranslation } from "react-i18next";

const API_KEY = import.meta.env.VITE_APP_KEY;

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 10);
  return null;
};

const WeatherLegend = () => {
  const map = useMap();
  const {t} = useTranslation(); // initialise the translation to manage the text change using the function 't'

  useEffect(() => {
    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "info legend");
      div.innerHTML = `
        <h4>${t("map.mtemperature")}(°C)</h4>
        <div class="legend-item"><span style="background-color: #0000FF"></span> ${t("map.verycold")}</div>
        <div class="legend-item"><span style="background-color: #00FFFF"></span> ${t("map.cold")}</div>
        <div class="legend-item"><span style="background-color: #00FF00"></span> ${t("map.mild")}</div>
        <div class="legend-item"><span style="background-color: #FFFF00"></span> ${t("map.warm")}</div>
        <div class="legend-item"><span style="background-color: #FF7F00"></span> ${t("map.hot")}</div>
        <div class="legend-item"><span style="background-color: #FF0000"></span> ${t("map.veryHot")}</div>
      `;
      return div;
    };

    legend.addTo(map);
    return () => {
      legend.remove();
    };
  }, [map, t]);

  return null;
};

const FullscreenControl = () => {
  const map = useMap();

  useEffect(() => {
    if (!map.fullscreenControl) {
      L.control.fullscreen({ position: "topright" }).addTo(map);
    }
  }, [map]);

  return null;
};

const WeatherMap = ({ city }) => {
  const [coords, setCoords] = useState([51.505, -0.09]); // Default to London
  const [overlay, setOverlay] = useState("temp_new"); // Default: Temperature

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!city) return;
      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setCoords([data[0].lat, data[0].lon]);
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [city]);

  return (
    <MapContainer center={coords} zoom={10} className="weather-map">
      <ChangeMapView coords={coords} />
      <WeatherLegend />
      <FullscreenControl />

      {/* <div className="overlay-toggle">
        <button onClick={() => setOverlay("wind_new")}>Wind Speed</button>
        <button onClick={() => setOverlay("precipitation_new")}>
          Precipitation
        </button>
        <button onClick={() => setOverlay("temp_new")}>Temperature</button>
      </div> */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <TileLayer
        url={`https://tile.openweathermap.org/map/${overlay}/{z}/{x}/{y}.png?appid=${API_KEY}`}
      />
    </MapContainer>
  );
};

export default WeatherMap;

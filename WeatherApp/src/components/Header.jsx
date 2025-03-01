import React from "react";
import "./styles/Header.css";
import WeatherIcon from "./WeatherIcon";

const Header = () => {
  return (
    <div className="header">
      <div className="darkModeToggle">
        <WeatherIcon condition="moonb" size="clamp(1rem, 50%, 2rem)" />
      </div>
      <div className="searchBar">
        <WeatherIcon condition="search" size="clamp(1rem, 50%, 2rem)" />
        <input
          type="text"
          className="searchField"
          placeholder="Enter Location, Postcode"
        />
      </div>
    </div>
  );
};

export default Header;

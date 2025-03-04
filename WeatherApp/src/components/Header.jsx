import React, {useState, useEffect} from "react";
import "./styles/Header.css";
import WeatherIcon from "./WeatherIcon";
import "./styles/darkmode.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className="header">
      <div className="darkModeToggle" onClick={() => setIsDarkMode(!isDarkMode)}>
        
      <WeatherIcon condition={isDarkMode ? "sun" : "moonb"}  size="clamp(1rem, 50%, 2rem)" />
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

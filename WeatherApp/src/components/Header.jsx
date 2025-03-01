import React from "react";
import "./styles/Header.css";
import WeatherIcon from "./WeatherIcon";

const Header = () => {

  const inputRef = React.useRef();

  return (
    <div className="header">
      <div className="darkModeToggle">
        <WeatherIcon condition="moonb" size="clamp(1rem, 50%, 2rem)" />
      </div>
      <div className="searchBar">
        <WeatherIcon condition="search" size="clamp(1rem, 50%, 2rem)" onClick={() => onSearch(inputRef.current.value)} />
        <input
          ref={inputRef}
          type="text"
          className="searchField"
          placeholder="Enter Location, Postcode"
        />
      </div>
    </div>
  );
};

export default Header;

import React, { useRef } from "react";
import "./styles/Header.css";
import WeatherIcon from "./WeatherIcon";

const Header = ({ onSearch }) => {
  const inputRef = useRef();


  // Trigger search by pressing Enter key
  const handleKeyPress = (event) => {
      if (event.key === "Enter" && inputRef.current) {
        onSearch(inputRef.current.value);
        inputRef.current.value = "";
      }
  };

  return (
    <div className="header">
      <div className="darkModeToggle">
        <WeatherIcon condition="moonb" size="clamp(1rem, 50%, 2rem)" />
      </div>
      <div className="searchBar">
        <WeatherIcon
          condition="search"
          size="clamp(1rem, 50%, 2rem)"
        />
        <input
          ref={inputRef}
          type="text"
          className="searchField"
          placeholder="Enter Location, Postcode"
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Header;

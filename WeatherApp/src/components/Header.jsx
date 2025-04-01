import React, { useRef, useState, useEffect } from "react";
import "./styles/Header.css";
import WeatherIcon from "./WeatherIcon";
import "./styles/darkmode.css";
import { useTranslation } from "react-i18next";
import LanguageModal from "./LanguageModal";

const Header = ({ onSearch }) => {
  const { t } = useTranslation(); // initialise the translation
  const inputRef = useRef();

  // Trigger search by pressing Enter key
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputRef.current) {
      onSearch(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(false); //state to manage dark mode toogle
  const [isModalOpen, setModalOpen] = useState(false); // state to manage langauge modal

  //effects to apply the dark/light mode to the body when clicked on the toggle
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className="header">
      <div className="header-left">
        <div
          className="darkModeToggle"
          onClick={() => setIsDarkMode(!isDarkMode)} // When there is a click toggle darkmode appear
        >
          <WeatherIcon
            condition={isDarkMode ? "sun" : "moonb"} // show sun in darkmode, moon in light mode
            size="clamp(1rem, 50%, 2rem)"
          />
        </div>

        <div className="searchBar">
          <WeatherIcon condition="search" size="clamp(1rem, 50%, 2rem)" />

          <input
            ref={inputRef}
            type="text"
            className="searchField"
            placeholder={t("Enter Location")}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>

      <div className="change">
        {/* button for language change at the header and translate text for change language */}
        <button className="change-btn" onClick={() => setModalOpen(true)}>
          🌍 <span className="lan-text">{t("change_language")}</span>
        </button>
        <LanguageModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Header;

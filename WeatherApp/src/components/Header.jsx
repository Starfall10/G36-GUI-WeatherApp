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

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className="header">
      <div
        className="darkModeToggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <WeatherIcon
          condition={isDarkMode ? "sun" : "moonb"}
          size="clamp(1rem, 50%, 2rem)"
        />
      </div>

      <div className="searchBar">
        <WeatherIcon condition="search" size="clamp(1rem, 50%, 2rem)" />

        <input
          ref={inputRef}
          type="text"
          className="searchField"
          placeholder={t("Enter Location, Postcode")}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className="change">
        {/* button for language change at the header */}
        <button className="change-btn" onClick={() => setModalOpen(true)}>
          🌍 {t("change_language")}
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

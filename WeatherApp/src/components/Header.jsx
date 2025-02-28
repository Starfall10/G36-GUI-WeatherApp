import React from "react";
import "./styles/Header.css";
import moonb from "../assets/moonb.png";
import searchIcon from "../assets/search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="darkModeToggle">
        <img src={moonb} alt="moon" />
      </div>
      <div className="searchBar">
        <img src={searchIcon} alt="searchIcon" />
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

import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import HourlyTemp from "./components/HourlyTemp";
import HourlyWind from "./components/HourlyWind";
import Widget from "./components/Widget";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="midContainer">
        <div className="div1">
          <Main />
        </div>
        <div className="div2">
          <HourlyTemp />
        </div>
        <div className="div3">
          <HourlyWind />
        </div>
      </div>
      <Widget />
    </div>
  );
};

export default App;

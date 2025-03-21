import React from "react";
import Header from "./components/Header";
import Mid from "./components/Mid";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="mobile-container">
      <div className="app">
        <Header />
        <Mid />
        <Widget />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import React, { Component } from "react";
import { Wheel } from "react-custom-roulette";

function App() {
  return (
    <div className='App'>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={3}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
      />
    </div>
  );
}

export default App;

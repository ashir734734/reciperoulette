import React, { useState, useEffect } from "react";
import Wheel from "./components/Roulete";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='App'>
      {isLoading ? (
        <Loading>
          <h1 className='heading'>Recipe Roulette</h1>
          <Wheel />
        </Loading>
      ) : (
        <div>
          <h1 className='heading'>Recipe Roulette</h1>
          <Wheel />
        </div>
      )}
    </div>
  );
}

export default App;

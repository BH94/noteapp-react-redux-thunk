import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import axios from "axios";

// import ClassContainer from "./containers/ClassContainer";
import FunctionalContainer from "./containers/FunctionalContainer";
import WeatherContainer from "./containers/WeatherContainer";

const App = () => {
  useEffect(() => {
    //추가
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&APPID=e75a0a68adc50371c5898d8d43931062"
      )
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <WeatherContainer />
      <FunctionalContainer />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Info from "./components/info";
import Form from "./components/form";
import WeatherInfo from "./components/WeatherInfo";
import viteLogo from "/weather.webp";
import "./App.css";

const WeatherApi = "17144a5536d2dfa1d0ceab6a595fb40a";

const geatingWeather = async (e, setState) => {
  e.preventDefault();
  const city = e.target.elements.city.value;

  if (city) {
    try {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherApi}`
      );
      const data = await api_url.json();
      console.log(data);

      if (data.main && data.sys) {
        setState({
          temp: tempCelsius.toFixed(2),
          city: data.name,
          country: data.sys.country,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          error: "",
        });
      } else {
        setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Unable to fetch weather data",
        });
      }
    } catch (error) {
      console.error("Error fetching the weather data", error);
      setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Error fetching the weather data",
      });
    }
  } else {
    setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: "Please enter a city",
    });
  }
};

function App() {
  const [state, setState] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  });

  return (
    <>
      <div>
        <Info />
        <Form weatherMethod={(e) => geatingWeather(e, setState)} />
        <WeatherInfo
          temp={state.temp}
          city={state.city}
          country={state.country}
          sunrise={state.sunrise}
          sunset={state.sunset}
          error={state.error}
        />
      </div>
    </>
  );
}

export default App;

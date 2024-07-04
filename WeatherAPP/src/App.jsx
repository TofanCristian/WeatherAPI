import React, { useState } from "react";
import Info from "./components/info";
import Form from "./components/form";
import WeatherInfo from "./components/WeatherInfo";
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
        const tempCelsius = data.main.temp - 273.15;
        let sunset = data.sys.sunset * 1000; // convert from seconds to milliseconds
        let date = new Date(sunset);
        let sunset_date =
          date.getHours() +
          ":" +
          date.getMinutes().toString().padStart(2, "0") +
          ":" +
          date.getSeconds().toString().padStart(2, "0");

        setState({
          temp: tempCelsius.toFixed(2),
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: sunset_date,
          error: "",
        });
      } else {
        setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: "Nu sa gasit asa oras",
        });
      }
    } catch (error) {
      console.error("Error fetching the weather data", error);
      setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Error fetching the weather data",
      });
    }
  } else {
    setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      sunset: undefined,
      error: "Introdu un oras boule",
    });
  }
};

function App() {
  const [state, setState] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  });

  return (
    <>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 info">
                <Info />
              </div>
              <div className="col-sm-6 form">
                <Form weatherMethod={(e) => geatingWeather(e, setState)} />
                <WeatherInfo
                  temp={state.temp}
                  city={state.city}
                  country={state.country}
                  pressure={state.pressure}
                  sunset={state.sunset}
                  error={state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

import React from "react";

const WeatherInfo = (props) => {
  return (
    <>
      <div>
        <p>
          Locatia: {props.city}, {props.country}{" "}
        </p>
        <p>Temperatura: {props.temp}</p>
        <p>Rasaritul soarelui: {props.sunrise}</p>
        <p>Apusul soarelui: {props.sunset}</p>
      </div>
    </>
  );
};

export default WeatherInfo;

import React from "react";

const WeatherInfo = (props) => {
  return (
    <>
      <div>
        {props.city ? (
          <>
            <p>
              Locatia: {props.city}, {props.country}
            </p>
            <p>Temperatura: {props.temp}</p>
            <p>Presiune: {props.pressure}</p>
            <p>Apusul soarelui: {props.sunset}</p>
          </>
        ) : (
          <p>{props.error}</p>
        )}
      </div>
    </>
  );
};

export default WeatherInfo;

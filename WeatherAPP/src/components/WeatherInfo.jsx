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
            <p>Rasaritul soarelui: {props.sunrise}</p>
            <p>Apusul soarelui: {props.sunset}</p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default WeatherInfo;

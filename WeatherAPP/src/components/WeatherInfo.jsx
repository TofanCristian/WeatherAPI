import React from "react";

const WeatherInfo = (props) => {
  return (
    <>
      <div className="infoWeath">
        {props.city ? (
          <>
            <p>
              Locație: {props.city}, {props.country}
            </p>
            <p>Temperatură: {props.temp}</p>
            <p>Presiune: {props.pressure}</p>
            <p>Apusul soarelui: {props.sunset}</p>
          </>
        ) : (
          <p className="error">{props.error}</p>
        )}
      </div>
    </>
  );
};

export default WeatherInfo;

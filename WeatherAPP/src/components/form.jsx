import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.weatherMethod}>
      <input type="text" name="city" placeholder="Oras" />
      <button>Afiseaza</button>
    </form>
  );
};

export default Form;

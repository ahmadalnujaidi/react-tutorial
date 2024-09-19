import React, { useState } from "react";

function UpdateObjectState() {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "mustang",
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value })); // use spread operator
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value })); // use spread operator
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value })); // use spread operator
  }

  return (
    <>
      <div>
        <p>
          Your favourite car is: {car.year} {car.make} {car.model}
        </p>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.model} onChange={handleModelChange} />
        <br />
      </div>
    </>
  );
}
export default UpdateObjectState;

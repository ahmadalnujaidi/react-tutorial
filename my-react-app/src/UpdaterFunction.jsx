import React, { useState } from "react";
function UpdaterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // uses the CURRENT state to calculate the NEXT state.
    // set functions do not trigger an update
    // React batches together state updates for performance reasons.
    // NEXT state becomes the CURRENT state after an update
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    // takes the PENDING state to calculate the NEXT state.
    // React puts your updater function in a queue (waiting line)
    // During the next render, it will call them in the same order.
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
    // setCount((c) => (c = 0)); not necessary
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        RESET
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
export default UpdaterFunction;

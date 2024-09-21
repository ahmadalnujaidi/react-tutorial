import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  //   useEffect(function, [dependencies]);
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  //   document.title = `Count: ${count} ${color}`; WOULD STILL WORK
  // but useEffect keep it more organized, and the other code would run
  // everytime regardless, and can perform CLEANUP CODE.

  function addCount() {
    setCount((c) => c + 1);
  }

  function subCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}
export default UseEffect;

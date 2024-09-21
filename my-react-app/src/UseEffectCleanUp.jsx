import React, { useState, useEffect } from "react";

function UseEffectCleanUp() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // without useEffect...
  //   window.addEventListener("resize", handleResize);
  //   console.log("event listener added");

  // with useEffect....
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added"); // this will be logged only once

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed");
    };
  }, []);

  useEffect(() => {
    document.title = `size: ${width}x${height}`;
  }, [width, height]);

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}
export default UseEffectCleanUp;

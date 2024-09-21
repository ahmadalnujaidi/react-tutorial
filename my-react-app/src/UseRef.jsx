import React, { useState, useEffect, useRef } from "react";
function UseRef() {
  //   let [number, setNumber] = useState(0);
  const ref = useRef(0);
  //   console.log(ref);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("component rendered");
    // console.log(inputRef);
  });

  function handleClick1() {
    // setNumber((n) => n + 1);
    // ref.current = ref.current + 1;
    // ref.current++;
    // console.log(ref.current);
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  }

  return (
    <>
      <button onClick={handleClick1}>Click Me1!</button>
      <input ref={inputRef1} />
      <button onClick={handleClick2}>Click Me2!</button>
      <input ref={inputRef2} />
      <button onClick={handleClick3}>Click Me3!</button>
      <input ref={inputRef3} />
    </>
  );
}
export default UseRef;

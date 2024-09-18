import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("adil");
  };

  const incrementAge = () => {
    setAge(age + 2);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>toggle employed status</button>
    </div>
  );
}
export default MyComponent;

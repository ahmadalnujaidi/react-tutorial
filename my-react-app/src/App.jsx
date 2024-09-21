// ----------HOW TO STYLE REACT COMPONENT WITH CSS
//---------------------------------------
// (not including external framework or preprocessors)

// 1. External
// 2. MODULES
// 3. INLINE

// ----------CONDITIONAL RENDERING = allows you to control what gets rendered
// in your application based on certain conditions
// (show, hide, or change components)
// import UserGreeting from "./userGreeting";

// import List from "./List.jsx";

// function App() {
//   const fruits = [
//     { id: 1, name: "orange", calories: 45 },
//     { id: 2, name: "apple", calories: 95 },
//     { id: 3, name: "bannana", calories: 105 },
//     { id: 4, name: "coconut", calories: 159 },
//     { id: 5, name: "pineapple", calories: 37 },
//   ];

//   const vegetables = [
//     { id: 6, name: "potatoes", calories: 110 },
//     { id: 7, name: "celery", calories: 15 },
//     { id: 8, name: "carrots", calories: 25 },
//     { id: 9, name: "corn", calories: 63 },
//     { id: 10, name: "broccoli", calories: 50 },
//   ];

//   return (
//     <>
//       {fruits.length > 0 && <List items={fruits} category="Fruits"></List>}
//       {vegetables.length > 0 && (
//         <List items={vegetables} category="vegetables"></List>
//       )}
//     </>
//   );
// }

//----------CLICK EVENT = An interaction when a user clicks on a specific element.
// we can respond to clicks by passing
// a callback to the onClick event handler
// import ClickEvents from "./ClickEvents.jsx";
// import ProfilePicture from "./ProfilePicture.jsx";
// function App() {
//   // return <ClickEvents></ClickEvents>;
//   return <ProfilePicture></ProfilePicture>;
// }

//----------REACT HOOK = special function that allows functional components
// to use React features without writing class components (React v16.8)
// (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A react hook that allows the creation of a stateful variable
// AND a setter function to update its value in the Virtual DOM.
// [name, setName]
// import MyComponent from "./myComponent";
// import Counter from "./Counter";
// function App() {
//   return <Counter></Counter>;
// }

//----------onChange = event handler used primarily with form elements
// ex. <input>, <textarea>, <select>, <radio>
// triggers a function everytime the value of the input changes
// import OnChange from "./OnChange";

// function App() {
//   return <OnChange></OnChange>;
// }

//----------COLORPICKER
// import ColorPicker from "./ColorPicker";

// function App() {
//   return <ColorPicker></ColorPicker>;
// }

//----------UPDATER FUNCTION = a function passed as an argument to setState() usually
// ex. setYear(year +1) / better to pass updater function as argument: arrow function
// Allow for safe updates based on the previous state
// used with multiple state updates and asynchronous functions
// good practice to use updater functions
// import UpdaterFunction from "./UpdaterFunction";
// function App() {
//   return <UpdaterFunction></UpdaterFunction>;
// }

//----------UPDATE OBJECTS in state
// import UpdateObjectState from "./UpdateObjectState";

// function App() {
//   return <UpdateObjectState></UpdateObjectState>;
// }

//----------UPDATE ARRAYS IN STATE
// import UpdateArrays from "./UpdateArrays";
// function App() {
//   return (
//     <>
//       <UpdateArrays></UpdateArrays>
//     </>
//   );
// }

//----------UPDATE ARRAY OF OBJECTS IN STATE
// import UpdateArrayObjects from "./UpdateArrayObjects";
// function App() {
//   return (
//     <>
//       <UpdateArrayObjects></UpdateArrayObjects>
//     </>
//   );
// }

//----------TO DO LIST
// import ToDoList from "./ToDoList";
// function App() {
//   return <ToDoList></ToDoList>;
// }

//----------useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
// This component re-renders
// This component mouts
// The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(()) => {})          // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount
// 3. useEffect(() => {}, [value])  // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

// import UseEffect from "./UseEffect";
// import UseEffectCleanUp from "./UseEffectCleanUp";
// function App() {
//   return (
//     <>
//       {/* <UseEffect></UseEffect> */}
//       <UseEffectCleanUp></UseEffectCleanUp>
//     </>
//   );
// }

//----------DIGITAL CLOCK APP
// import DigitalClock from "./DigitalClock.jsx";
// function App() {
//   return (
//     <>
//       <DigitalClock></DigitalClock>
//     </>
//   );
// }

//----------useContext() = React Hook that allows you to share values
// between multiple levels of components
// without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value ={value}>
// <Child />
// </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { userContext } from 'react';
// import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);

// import ComponentA from "./ComponentA";
// function App() {
//   return (
//     <>
//       <ComponentA></ComponentA>
//     </>
//   );
// }

function App() {
  return;
}
export default App;

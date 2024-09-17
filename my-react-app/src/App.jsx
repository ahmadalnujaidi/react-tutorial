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

import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "orange", calories: 45 },
    { id: 2, name: "apple", calories: 95 },
    { id: 3, name: "bannana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"></List>}
      {vegetables.length > 0 && (
        <List items={vegetables} category="vegetables"></List>
      )}
    </>
  );
}

export default App;

function ClickEvents() {
  // let count = 0;
  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} times`);
  //   } else {
  //     console.log(`${name} stop clicking me`);
  //   }
  // };

  // const handleClick2 = (name) => {
  //   console.log(`${name} stop clicking me`);
  // };

  const handleClick = (e) => {
    // console.log(e);
    e.target.textContent = "OUCH! 🤕";
  };

  return <button onDoubleClick={(e) => handleClick(e)}>click me 😊</button>;
}
export default ClickEvents;

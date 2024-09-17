function Button() {
  //Inline do style={styles}
  const styles = {
    backgroundColor: "hsl(2000, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={styles}>Click me</button>;
}
export default Button;

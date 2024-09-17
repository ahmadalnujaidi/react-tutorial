import PropTypes from "prop-types";
function List(props) {
  //   const fruits = [
  //     { id: 1, name: "orange", calories: 45 },
  //     { id: 2, name: "apple", calories: 95 },
  //     { id: 3, name: "bannana", calories: 105 },
  //     { id: 4, name: "coconut", calories: 159 },
  //     { id: 5, name: "pineapple", calories: 37 },
  //   ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // Alphabetical
  //   fruits.sort((a, b) => a.calories - b.calories); // Numeric order
  //   fruits.sort((a, b) => b.calories - a.calories); // Numeric order

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  //   fruits.sort();

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li> //key is to have a unique id
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
List.defaultProps = {
  category: "category",
  items: [],
};
List.prototypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

export default List;

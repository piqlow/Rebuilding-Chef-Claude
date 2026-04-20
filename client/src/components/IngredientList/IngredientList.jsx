import "./IngredientList.css";

function IngredientList({ ingredients }) {
  const ingredientListElements = ingredients.map((ingredient, i) => (
    <li key={ingredient}>
      {i + 1}. {ingredient}
    </li>
  ));

  return (
    <section className="ingredients">
      <ul className="ingredients-list">{ingredientListElements}</ul>
    </section>
  );
}

export default IngredientList;

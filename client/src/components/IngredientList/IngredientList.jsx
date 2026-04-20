import "./IngredientList.css";

function IngredientList({ ingredients, getRecipe }) {
  const ingredientListElements = ingredients.map((ingredient, i) => (
    <li key={ingredient}>
      {i + 1}. {ingredient}
    </li>
  ));

  return (
    <section className="ingredients">
      <ul className="ingredients-list">{ingredientListElements}</ul>
      {ingredients.length >= 3 && (
        <div className="get-recipe-container">
          <div className="left-get-recipe">
            <h2>Need cooking inspiration?</h2>
            <p>
              Click the button and we'll create a recipe based on your available
              ingredients.
            </p>
          </div>
          <div className="right-get-recipe">
            <button onClick={getRecipe}>Get Recipe</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default IngredientList;

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
      {ingredients.length >= 3 && (
        <div className="get-recipe-container">
          <div className="left-get-recipe">
            <h2>Lorem ipsum é meu zovoo</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae eligendi corporis possimus impedit aut? Ipsam alias
              optio deserunt distinctio ex nobis adipisci similique, dolores
              dignissimos doloribus quae expedita inventore veniam!
            </p>
          </div>
          <div className="right-get-recipe">
            <button>Get Recipe</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default IngredientList;

import { useState } from "react";
import "./Main.css";
import IngredientList from "../IngredientList/IngredientList";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import { getRecipe } from "../../services/ai";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  // console.log(ingredients);

  function addIngredient(formData) {
    if (formData.get("ingredient") !== "") {
      const ingredient = formData.get("ingredient");
      setIngredients([...ingredients, ingredient]);
    }
  }

  async function handleGetRecipe() {
    const recipeFromAI = await getRecipe(ingredients);
    setRecipe(recipeFromAI.messsage);
  }

  return (
    <main className="main">
      <div className="main-content container">
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Add Ingredient</button>
        </form>

        {/* <IngredientList ingredient={ingredients} /> */}
        {ingredients.length >= 1 && (
          <IngredientList
            ingredients={ingredients}
            getRecipe={handleGetRecipe}
          />
        )}

        {recipe !== "" && <ClaudeRecipe recipe={recipe} />}
      </div>
    </main>
  );
}

export default Main;

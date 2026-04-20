import ReactMarkdown from "react-markdown";
import "./ClaudeRecipe.css";

function ClaudeRecipe({ recipe }) {
  return (
    <section className="recipe-section">
      <h1>Chef Claude recommends: </h1>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}

export default ClaudeRecipe;

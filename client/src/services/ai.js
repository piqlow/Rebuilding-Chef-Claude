export async function getRecipe(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ")
  const res = await fetch("http://localhost:3000/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ingredientsString })
  })
  const data = await res.json()

  return data
}
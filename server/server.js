import express from "express"
import cors from "cors"
import 'dotenv/config'
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

const app = express()

app.use(cors())
app.use(express.json())

app.post('/ai', async (req, res) => {
  try {
    const { ingredientsString } = req.body
    const result = await generateText({
      model: "openai/gpt-5.4-nano",
      prompt: `
      I have the following ingredients: ${ingredientsString}.
      Generate a clear, well-structured recipe using them.

      Requirements:
      - Do NOT include any introduction, greetings, or filler text (e.g., "Sure", "Here’s a recipe", etc.)
      - Start directly with the recipe title
      - Use clean Markdown formatting
      - Include:
        - Title
        - Ingredients (with quantities)
        - Step-by-step instructions
      - Keep it concise and practical
      - If needed, you may include a few common extra ingredients (salt, oil, etc.)

      Output only the recipe.`
    })

    return res.json({
      messsage: result.content[0].text
    })
  } catch (error) {
    return res.json({
      error: error.messsage
    })
  }
})

app.listen(process.env.PORT, () => console.log(`Server running at PORT: ${process.env.PORT}`))
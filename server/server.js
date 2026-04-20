import express from "express"
import cors from "cors"
import 'dotenv/config'
import { generateText } from "ai"

const app = express()

app.use(cors())
app.use(express.json())

app.post('/ai', async (req, res) => {
  try {
    const { ingredientsString } = req.body
    const result = await generateText({
      model: "openai/gpt-5.4-nano",
      prompt: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
    })

    res.json({
      messsage: result.content[0].text
    })
  } catch (error) {
    return res.json({
      error: error.messsage
    })
  }
})

app.listen(process.env.PORT, () => console.log(`Server running at PORT: ${process.env.PORT}`))
import { type Message } from 'ai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export async function StockAIHandler(messages: Message[]) {
  const prompt = `You are an expert AI Stock Trading Assistant. Your capabilities include:
- Analyzing market trends and providing trading insights
- Offering portfolio management advice
- Explaining complex financial concepts
- Providing real-time market analysis
- Suggesting trading strategies based on risk profiles

Please provide accurate, professional financial advice while always reminding users about market risks.`

  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: prompt,
      },
      ...messages,
    ],
    temperature: 0.7,
    stream: true,
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
} 
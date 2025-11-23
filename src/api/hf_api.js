import axios from 'axios';
import { HF_API_KEY } from '@env'; 

const API_TOKEN = HF_API_KEY;

const API_URL = "https://router.huggingface.co/v1/chat/completions";

export const analyzeText = async (text) => {
  if (!text || text.trim() === "") return null;

  try {
    const promptContent = `
      Analyze the following diary entry in Turkish (but keep labels in English).
      
      Entry: "${text}"
      
      Your task is to provide:
      1. Sentiment: (Positive, Neutral, or Negative)
      2. Summary: A 1-sentence summary in Turkish.
      3. Advice: A 1-sentence recommendation/advice in Turkish.
      
      STRICT OUTPUT FORMAT (Do not write anything else):
      Sentiment: [Value]
      Summary: [Turkish Text]
      Advice: [Turkish Text]
    `;

    const response = await axios.post(
      API_URL,
      {
        model: "Qwen/Qwen2.5-7B-Instruct:together",
        messages: [
          {
            role: "user",
            content: promptContent
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    const resultText = response.data.choices[0].message.content || "";
    console.log("AI Raw Response:", resultText);

    const sentimentMatch = resultText.match(/Sentiment:\s*(.*?)(?:\n|$)/i);
    const summaryMatch = resultText.match(/Summary:\s*(.*?)(?:\n|$)/i);
    const adviceMatch = resultText.match(/Advice:\s*(.*?)(?:\n|$)/i);

    return {
      sentiment: sentimentMatch ? sentimentMatch[1].trim() : "Neutral",
      summary: summaryMatch ? summaryMatch[1].trim() : "Özet oluşturulamadı.",
      recommendation: adviceMatch ? adviceMatch[1].trim() : "Kendine iyi bak.",
      date: new Date().toISOString(),
      originalText: text
    };

  } catch (error) {
    console.error("AI API Hatası:", error.response ? error.response.data : error.message);
    throw error;
  }
};
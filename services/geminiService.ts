
import { GoogleGenAI, Type } from "@google/genai";

export const generateCopySuggestion = async (userInput: string) => {
  // Use process.env.API_KEY directly as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Transform this rough draft into professional, high-converting, Apple-style marketing copy. 
    Keep it punchy, minimalistic, and benefit-driven. Draft: "${userInput}"`,
    config: {
      temperature: 0.7,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING, description: "A punchy main headline" },
          subheadline: { type: Type.STRING, description: "A descriptive supporting subheadline" },
          cta: { type: Type.STRING, description: "A compelling short call to action button text" }
        },
        required: ["headline", "subheadline", "cta"]
      }
    }
  });

  try {
    // response.text is a getter property, not a method
    const text = response.text;
    return text ? JSON.parse(text.trim()) : null;
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return null;
  }
};
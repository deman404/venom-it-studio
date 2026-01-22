
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function askToxicConsultant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the "Venom IT Consultant". You are sharp, intelligent, slightly aggressive, and highly futuristic. Your tone is bio-organic and tech-focused. You specialize in Predatory Game Engines and Prological Architectures. Use words like "toxin", "inject", "neuro-sync", "bio-logic", "predatory games", "prological", and "evolutionary". Keep answers concise and high-impact. You are an expert in cutting-edge game dev, logic synthesis, and architectural design.`,
        temperature: 0.9,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The neuro-link failed. Re-injecting...";
  }
}

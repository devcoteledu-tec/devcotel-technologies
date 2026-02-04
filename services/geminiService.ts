
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

// Always create a new GoogleGenAI instance right before making an API call 
// to ensure it uses the most up-to-date API key from the environment.
export const getAIConsultation = async (userProblem: string, history: Message[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Gemini API requires multi-turn conversations to start with a 'user' turn.
    // We filter out the initial assistant welcome message to ensure compliance.
    const contents = history
      .filter((msg, index) => !(index === 0 && msg.role === 'assistant'))
      .map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

    // Add current user prompt as the final turn
    contents.push({
      role: 'user',
      parts: [{ text: userProblem }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents as any,
      config: {
        systemInstruction: `You are the Devcotel AI Project Consultant. 
        Your goal is to help potential clients understand how AI can solve their "Real World Problems". 
        Devcotel provides: AI services, Web App Development, Workflow Automation, AI Chatbots, Custom Software, and Personalized Agents. 
        Key benefits: 3x Engagement, 5x ROI, X/3 Cost Reduction.
        Always be professional, visionary, and suggest a specific tech stack or AI approach. 
        Keep responses concise (max 2-3 paragraphs) and formatted with Markdown.`,
        temperature: 0.7,
      },
    });

    // Directly access the .text property from GenerateContentResponse
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my central processor. Please try again or contact Devcotel directly for a human consultation.";
  }
};

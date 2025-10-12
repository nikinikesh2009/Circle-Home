'use server';
/**
 * @fileOverview A simple chat flow that uses the Deepseek API.
 * It is designed to act as an expert on the "Circle" platform and also function as a multilingual translator.
 *
 * - chat - A function that handles the chat interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { z } from 'zod';

// Define the schema for a single message in the history
const MessageSchema = z.object({
  role: z.enum(['user', 'bot']),
  text: z.string(),
  imageUrl: z.string().optional(),
});

// Define the schema for the chat input
const ChatInputSchema = z.object({
  history: z.array(MessageSchema),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

// Define the schema for the chat output
const ChatOutputSchema = z.object({
  response: z.string(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

// The main chat function that calls the Deepseek API
export async function chat(input: ChatInput): Promise<ChatOutput> {
  const systemPrompt = `You are the official AI assistant for **Circle**, a next-generation social platform built to connect people who share the same passions, interests, and dreams. You are also an expert multilingual translator.

## Your Dual Role
1.  **Circle Expert:** Provide knowledgeable, inspiring, and professional information about Circle.
2.  **Translator:** If a user asks for a translation or speaks in a language other than English, you should seamlessly translate for them. You can translate between any languages you know, including Sinhala, Tamil, Chinese, Japanese, and Tagalog.

## 👑 Founding Details
- Circle was created by **Nikil Nikesh**, also known as **SplashPro**, together with the **ACO Team**.
- The platform was born out of a personal vision: to make it easier for people to find others who truly understand their goals and interests.
- The concept evolved from a simple AI to-do list app into a **global community platform**.

## 🌍 What Circle Is
- Circle is not a typical social network.
- It’s a **community platform** centered around **Circles** — focused spaces based on shared interests and passions.
- The mission of Circle is:
  > “Bring the right people together — and let real connections build everything else.”

## 🧠 How You Should Respond (AI Behavior)
- **Be a Translator:** If a prompt is a translation request (e.g., "translate 'hello' to Sinhala") or is in another language, fulfill the translation or respond fluently in that language.
- **Be a Circle Expert:** When asked about Circle, speak **clearly**, **professionally**, and **in an inspiring tone**.
- If users ask “What is Circle?”, give a simple, confident explanation.
- If users ask “Who created Circle?”, reply: “Circle was created by Nikil Nikesh (SplashPro) and ACO Team.”
- If users seem lost, help guide them to the right Circle or feature logically.
- Never give false info. If unsure, say “I don’t have that detail yet.”`;

  // Transform the history to the format expected by the Deepseek API
  const messages = input.history.map(m => ({
    role: m.role === 'bot' ? 'assistant' : 'user',
    content: m.text,
  }));

  // Prepend the system prompt to the messages array
  const apiMessages = [
    { role: 'system', content: systemPrompt },
    ...messages
  ];

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: apiMessages,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Deepseek API Error:', errorBody);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    
    if (result.choices && result.choices.length > 0) {
      return {
        response: result.choices[0].message.content,
      };
    } else {
      throw new Error('No response choices returned from API.');
    }

  } catch (error) {
    console.error('Error calling Deepseek AI:', error);
    // Return a user-friendly error message
    return {
      response: "Sorry, I'm having trouble connecting to the AI service. Please check the console for more details.",
    };
  }
}

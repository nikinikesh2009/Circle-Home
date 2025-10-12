'use server';
/**
 * @fileOverview A simple chat flow that uses Deepseek to generate a response.
 *
 * - chat - A function that handles the chat interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { z } from 'zod';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'bot']),
    text: z.string(),
    imageUrl: z.string().optional(),
  })),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  const messages = [
    {
      role: 'system',
      content: 'You are Circle AI, a helpful assistant for the Circle platform. Your goal is to answer user questions about the platform and help them navigate its features. Keep your responses concise and friendly.'
    },
    ...input.history.map(m => ({
      role: m.role === 'bot' ? 'assistant' : 'user',
      content: m.text,
    }))
  ];

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messages,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('DeepSeek API Error:', errorBody);
      throw new Error(`DeepSeek API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const botResponse = result.choices[0]?.message?.content || "Sorry, I couldn't get a response.";
    
    return {
      response: botResponse,
    };

  } catch (error) {
    console.error('Error calling DeepSeek API:', error);
    return {
      response: "Sorry, I'm having trouble connecting to the AI. Please try again later.",
    };
  }
}

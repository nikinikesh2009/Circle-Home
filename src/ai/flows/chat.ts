'use server';
/**
 * @fileOverview A simple chat flow that uses Gemini to generate a response.
 *
 * - chat - A function that handles the chat interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import {
  generate as genkitGenerate,
  MessageData,
} from 'genkit';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'bot']),
    text: z.string(),
  })),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const history: MessageData[] = input.history.map(m => ({
      role: m.role === 'bot' ? 'model' : 'user',
      content: [{ text: m.text }],
    }));

    const response = await genkitGenerate({
      model: ai.model,
      prompt: "You are Circle AI, a helpful assistant for the Circle platform. Your goal is to answer user questions about the platform and help them navigate its features. Keep your responses concise and friendly.",
      history,
    });

    return {
      response: response.text,
    };
  }
);

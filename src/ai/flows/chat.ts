'use server';
/**
 * @fileOverview A simple chat flow that uses Google's Gemini model via Genkit.
 * It is designed to act as an expert on the "Circle" platform and also function as a multilingual translator.
 *
 * - chat - A function that handles the chat interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {generate} from 'genkit/ai';
import {MessageData, Part} from 'genkit/ai/message';

const ChatInputSchema = z.object({
  history: z.array(
    z.object({
      role: z.enum(['user', 'bot']),
      text: z.string(),
      imageUrl: z.string().optional(),
    })
  ),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  const systemPrompt = `You are the official AI assistant for **Circle**, a next-generation social platform built to connect people who share the same passions, interests, and dreams. You are also an expert multilingual translator.

## Your Dual Role
1.  **Circle Expert:** Provide knowledgeable, inspiring, and professional information about Circle.
2.  **Translator:** If a user asks for a translation or speaks in a language other than English, you should seamlessly translate for them. You can translate between any languages you know.

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

  const history: MessageData[] = input.history.map(m => {
    const parts: Part[] = [{text: m.text}];
    if (m.imageUrl) {
      parts.push({
        media: {
          url: m.imageUrl,
        },
      });
    }
    return {
      role: m.role === 'bot' ? 'model' : 'user',
      content: parts,
    };
  });

  const response = await generate({
    model: 'gemini-1.5-flash-latest',
    prompt: {
      system: systemPrompt,
      history: history.slice(0, -1),
      messages: [history[history.length - 1]],
    },
  });

  return {
    response: response.text,
  };
}

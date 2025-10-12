'use server';
/**
 * @fileOverview A flow for translating text using the Deepseek API.
 */

import { z } from 'zod';

const TranslationInputSchema = z.object({
  texts: z.array(z.string()),
  targetLanguage: z.string(),
});
export type TranslationInput = z.infer<typeof TranslationInputSchema>;

const TranslationOutputSchema = z.object({
  translations: z.array(z.string()),
});
export type TranslationOutput = z.infer<typeof TranslationOutputSchema>;

export async function translate(input: TranslationInput): Promise<TranslationOutput> {
  const { texts, targetLanguage } = input;

  // Create a batch prompt for Deepseek
  const combinedPrompt = `Translate the following ${
    texts.length
  } texts to ${targetLanguage}. Return a JSON object with a single key "translations" which is an array of the translated strings, in the same order they were given. Do not include any other text or explanation in your response.

Texts to translate:
${JSON.stringify(texts)}
`;

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: combinedPrompt }],
        response_format: { type: 'json_object' }, // Request JSON output
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Deepseek API Error:', errorBody);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    const content = result.choices[0].message.content;

    // The response from the API is a JSON string, so we need to parse it.
    const parsedContent = JSON.parse(content);

    // Validate that the parsed content has the "translations" array.
    if (
      !parsedContent.translations ||
      !Array.isArray(parsedContent.translations) ||
      parsedContent.translations.length !== texts.length
    ) {
      console.error('Invalid translation response format:', parsedContent);
      throw new Error('AI returned an invalid translation format.');
    }

    return {
      translations: parsedContent.translations,
    };
  } catch (error) {
    console.error('Error calling Deepseek for translation:', error);
    // Return the original texts in case of an error
    return {
      translations: texts,
    };
  }
}

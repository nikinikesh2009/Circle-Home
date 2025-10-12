import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {nextPlugin} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    nextPlugin(),
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
  enableTracing: true,
});

"use client";

import React, { createContext, useState, ReactNode } from 'react';
import { translate } from '@/ai/flows/translate';
import { useToast } from '@/hooks/use-toast';

interface TranslationContextType {
  language: string;
  setLanguage: (language: string) => void;
  translations: Record<string, string>;
  translatePage: (targetLanguage: string) => Promise<void>;
  isTranslating: boolean;
}

export const TranslationContext = createContext<TranslationContextType>({
  language: 'en',
  setLanguage: () => {},
  translations: {},
  translatePage: async () => {},
  isTranslating: false,
});

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const applyTranslations = (newTranslations: Record<string, string>) => {
    Object.keys(newTranslations).forEach(originalText => {
      const translatedText = newTranslations[originalText];
      const elements = document.querySelectorAll('[data-translate]');
      elements.forEach(element => {
        const el = element as HTMLElement;
        if (el.dataset.originalText === originalText || el.innerText === originalText) {
          if (!el.dataset.originalText) {
            el.dataset.originalText = originalText;
          }
          el.innerText = translatedText;
        }
      });
    });
  };

  const revertToOriginal = () => {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const el = element as HTMLElement;
        if (el.dataset.originalText) {
            el.innerText = el.dataset.originalText;
        }
    });
  }

  const translatePage = async (targetLanguage: string) => {
    setIsTranslating(true);
    
    if (targetLanguage === 'en') {
        revertToOriginal();
        setTranslations({});
        setIsTranslating(false);
        return;
    }

    try {
      const elements = document.querySelectorAll('[data-translate]');
      const textsToTranslate: string[] = [];
      elements.forEach(element => {
        const el = element as HTMLElement;
        const originalText = el.dataset.originalText || el.innerText;
        if (!el.dataset.originalText) {
            el.dataset.originalText = originalText;
        }
        if (!translations[originalText]) {
          textsToTranslate.push(originalText);
        }
      });

      if (textsToTranslate.length === 0) {
        // If all texts are already translated, just apply them
        applyTranslations(translations);
        setIsTranslating(false);
        return;
      }

      const response = await translate({ texts: textsToTranslate, targetLanguage });

      const newTranslations: Record<string, string> = { ...translations };
      textsToTranslate.forEach((text, index) => {
        newTranslations[text] = response.translations[index];
      });

      setTranslations(newTranslations);
      applyTranslations(newTranslations);

    } catch (error) {
      console.error("Translation failed", error);
      toast({
        variant: "destructive",
        title: "Translation Error",
        description: "Failed to translate the page.",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const value = {
    language,
    setLanguage,
    translations,
    translatePage,
    isTranslating,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

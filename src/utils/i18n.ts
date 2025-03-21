
import enTranslations from '../locales/en.json';
import viTranslations from '../locales/vi.json';

export type Language = 'en' | 'vi';

export const translations = {
  en: enTranslations,
  vi: viTranslations
};

export type TranslationKey = string;

// Helper function to access nested translation keys like "nav.home"
export const getNestedTranslation = (obj: any, path: string): string => {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path; // Return the key if translation not found
    }
  }
  
  return typeof result === 'string' ? result : path;
};

// Helper function to get localized content based on language
export const getLocalizedContent = (content: any, language: Language, fallback: string = ""): string => {
  if (!content) return fallback;
  
  // For Vietnamese language
  if (language === 'vi') {
    if (content && typeof content === 'string' && content.trim() !== '') {
      return content; // Return Vietnamese content if it exists
    }
    return fallback || ''; // Return fallback if Vietnamese content is empty
  }
  
  // For English language
  return fallback || '';
};

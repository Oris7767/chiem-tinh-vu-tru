
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.calculate': 'Calculate',
    'nav.about': 'About',
    'nav.meanings': 'Meanings',
    'nav.start': 'Get Started',
    
    // Hero section
    'hero.title': 'Vedic Numerology',
    'hero.subtitle': 'Discover the power of numbers in your life',
    'hero.cta': 'Calculate Your Numbers',
    
    // Calculator
    'calculator.title': 'Discover Your Numbers',
    'calculator.subtitle': 'Enter your full name and date of birth to discover your important numbers according to Vedic Numerology.',
    'calculator.fullName': 'Full Name',
    'calculator.day': 'Day',
    'calculator.month': 'Month',
    'calculator.year': 'Year',
    'calculator.button': 'Calculate Now',
    'calculator.calculating': 'Calculating...',
    
    // Tabs
    'tab.birth': 'Birth Number',
    'tab.name': 'Name Number',
    'tab.life': 'Life Number',
    
    // Result sections
    'result.steps': 'Calculation steps:',
    'result.birthNumber': 'Your birth number is:',
    'result.nameNumber': 'Your name number is:',
    'result.lifeNumber': 'Your life number is:',
    
    // Aspects
    'aspect.finance': 'Finance',
    'aspect.romance': 'Romance',
    'aspect.education': 'Education',
    'aspect.health': 'Health',
    'aspect.family': 'Family',
    'aspect.growth': 'Growth',
    'aspect.career': 'Career',
    'aspect.reputation': 'Reputation',
    'aspect.spirituality': 'Spirituality',
    'aspect.luck': 'Luck',
    
    // Section titles
    'section.strengths': 'Strengths',
    'section.challenges': 'Challenges',
    'section.career': 'Suitable Careers',
    'section.relationships': 'Relationships',
    
    // About section
    'about.title': 'What is Vedic Numerology?',
    'about.subtitle': 'Discover the origins and meanings of Vedic Numerology.',
    'about.origins.title': 'Ancient Origins',
    'about.origins.p1': 'Vedic Numerology originates from ancient Indian culture and the sacred Vedic texts, written over 5,000 years ago. It is one of the oldest numerology systems in the world.',
    'about.origins.p2': 'According to Vedic Numerology, each number carries its own vibration and energy, which can reveal a lot about one\'s character, potential and destiny.',
    'about.difference.title': 'The Difference',
    'about.difference.p1': 'What makes Vedic Numerology special compared to other systems is that it not only analyzes numbers from birth dates, but also places special emphasis on a person\'s name.',
    'about.difference.p2': 'This system is also closely linked to the planets in the solar system and the nodes of the moon (Rahu and Ketu). Each number corresponds to a planet, carrying the unique energy and characteristics of that planet.',
    
    // Meanings section
    'meanings.title': 'Meanings of Numbers',
    'meanings.subtitle': 'Each number from 1 to 9 carries unique meanings and energies, linked to the planets.'
  },
  vi: {
    // Navigation
    'nav.calculate': 'Tính toán',
    'nav.about': 'Giới thiệu',
    'nav.meanings': 'Ý nghĩa',
    'nav.start': 'Bắt đầu',
    
    // Hero section
    'hero.title': 'Số học Vệ Đà',
    'hero.subtitle': 'Khám phá sức mạnh của các con số trong cuộc sống của bạn',
    'hero.cta': 'Tính Số Của Bạn',
    
    // Calculator
    'calculator.title': 'Khám phá con số của bạn',
    'calculator.subtitle': 'Nhập tên đầy đủ và ngày sinh của bạn để khám phá các con số quan trọng theo số học Vệ Đà.',
    'calculator.fullName': 'Họ và tên đầy đủ',
    'calculator.day': 'Ngày',
    'calculator.month': 'Tháng',
    'calculator.year': 'Năm',
    'calculator.button': 'Tính toán ngay',
    'calculator.calculating': 'Đang tính toán...',
    
    // Tabs
    'tab.birth': 'Số Sinh (Birth)',
    'tab.name': 'Số Tên (Name)',
    'tab.life': 'Số Cuộc Đời (Life)',
    
    // Result sections
    'result.steps': 'Các bước tính toán:',
    'result.birthNumber': 'Số sinh của bạn là:',
    'result.nameNumber': 'Số tên của bạn là:',
    'result.lifeNumber': 'Số cuộc đời của bạn là:',
    
    // Aspects
    'aspect.finance': 'Tài chính',
    'aspect.romance': 'Tình cảm',
    'aspect.education': 'Học vấn',
    'aspect.health': 'Sức khỏe',
    'aspect.family': 'Gia đình',
    'aspect.growth': 'Phát triển',
    'aspect.career': 'Sự nghiệp',
    'aspect.reputation': 'Danh tiếng',
    'aspect.spirituality': 'Tâm linh',
    'aspect.luck': 'May mắn',
    
    // Section titles
    'section.strengths': 'Điểm mạnh',
    'section.challenges': 'Thách thức',
    'section.career': 'Nghề nghiệp phù hợp',
    'section.relationships': 'Các mối quan hệ',
    
    // About section
    'about.title': 'Số học Vệ Đà là gì?',
    'about.subtitle': 'Khám phá nguồn gốc và ý nghĩa của số học Vệ Đà.',
    'about.origins.title': 'Nguồn gốc cổ đại',
    'about.origins.p1': 'Số học Vệ Đà có nguồn gốc từ văn hóa Ấn Độ cổ đại và các văn bản Vệ Đà thiêng liêng, được viết cách đây hơn 5.000 năm. Đây là một trong những hệ thống số học lâu đời nhất thế giới.',
    'about.origins.p2': 'Theo Số học Vệ Đà, mỗi con số mang một rung động và năng lượng riêng biệt, có thể tiết lộ rất nhiều về tính cách, tiềm năng và số phận của một người.',
    'about.difference.title': 'Sự khác biệt',
    'about.difference.p1': 'Điểm đặc biệt của Số học Vệ Đà so với các hệ thống khác là nó không chỉ phân tích các con số từ ngày sinh, mà còn đặc biệt chú trọng đến tên của một người.',
    'about.difference.p2': 'Hệ thống này cũng gắn liền với các hành tinh trong hệ mặt trời và các nút của mặt trăng (Rahu và Ketu). Mỗi số tương ứng với một hành tinh, mang năng lượng và đặc tính riêng biệt của hành tinh đó.',
    
    // Meanings section
    'meanings.title': 'Ý nghĩa các con số',
    'meanings.subtitle': 'Mỗi con số từ 1 đến 9 đều mang những ý nghĩa và năng lượng riêng biệt, gắn liền với các hành tinh.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

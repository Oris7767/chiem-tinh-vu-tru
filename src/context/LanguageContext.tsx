
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
    'meanings.subtitle': 'Each number from 1 to 9 carries unique meanings and energies, linked to the planets.',

    // Number meanings
    'number.1.title': 'The Sun',
    'number.1.planet': 'Sun',
    'number.1.shortDescription': 'Leadership, creativity, and originality. The number 1 represents new beginnings, independence, and pioneering spirit.',
    
    'number.2.title': 'The Moon',
    'number.2.planet': 'Moon',
    'number.2.shortDescription': 'Sensitivity, intuition, and harmony. The number 2 represents partnerships, diplomacy, and receptive energy.',
    
    'number.3.title': 'Jupiter',
    'number.3.planet': 'Jupiter',
    'number.3.shortDescription': 'Expression, joy, and optimism. The number 3 represents creativity, communication, and expansion.',
    
    'number.4.title': 'Rahu',
    'number.4.planet': 'Rahu (North Node)',
    'number.4.shortDescription': 'Stability, determination, and practicality. The number 4 represents foundations, order, and methodical approach.',
    
    'number.5.title': 'Mercury',
    'number.5.planet': 'Mercury',
    'number.5.shortDescription': 'Freedom, versatility, and change. The number 5 represents adaptability, travel, and progressive energy.',
    
    'number.6.title': 'Venus',
    'number.6.planet': 'Venus',
    'number.6.shortDescription': 'Harmony, love, and responsibility. The number 6 represents nurturing, beauty, and balance.',
    
    'number.7.title': 'Ketu',
    'number.7.planet': 'Ketu (South Node)',
    'number.7.shortDescription': 'Spirituality, analysis, and wisdom. The number 7 represents introspection, mysticism, and inner knowledge.',
    
    'number.8.title': 'Saturn',
    'number.8.planet': 'Saturn',
    'number.8.shortDescription': 'Authority, achievement, and strength. The number 8 represents ambition, organization, and material success.',
    
    'number.9.title': 'Mars',
    'number.9.planet': 'Mars',
    'number.9.shortDescription': 'Courage, energy, and completion. The number 9 represents humanitarianism, leadership, and transformation.'
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
    'meanings.subtitle': 'Mỗi con số từ 1 đến 9 đều mang những ý nghĩa và năng lượng riêng biệt, gắn liền với các hành tinh.',

    // Number meanings
    'number.1.title': 'Mặt Trời',
    'number.1.planet': 'Mặt Trời',
    'number.1.shortDescription': 'Lãnh đạo, sáng tạo và độc đáo. Số 1 thể hiện sự khởi đầu mới, độc lập và tinh thần tiên phong.',
    
    'number.2.title': 'Mặt Trăng',
    'number.2.planet': 'Mặt Trăng',
    'number.2.shortDescription': 'Nhạy cảm, trực giác và hài hòa. Số 2 thể hiện quan hệ đối tác, ngoại giao và năng lượng tiếp nhận.',
    
    'number.3.title': 'Mộc Tinh',
    'number.3.planet': 'Mộc Tinh',
    'number.3.shortDescription': 'Biểu đạt, niềm vui và lạc quan. Số 3 thể hiện sự sáng tạo, giao tiếp và mở rộng.',
    
    'number.4.title': 'Rahu',
    'number.4.planet': 'Rahu (Bắc Đẩu)',
    'number.4.shortDescription': 'Ổn định, quyết tâm và thực tế. Số 4 thể hiện nền tảng, trật tự và phương pháp tiếp cận có hệ thống.',
    
    'number.5.title': 'Thủy Tinh',
    'number.5.planet': 'Thủy Tinh',
    'number.5.shortDescription': 'Tự do, đa năng và thay đổi. Số 5 thể hiện khả năng thích ứng, du lịch và năng lượng tiến bộ.',
    
    'number.6.title': 'Kim Tinh',
    'number.6.planet': 'Kim Tinh',
    'number.6.shortDescription': 'Hài hòa, tình yêu và trách nhiệm. Số 6 thể hiện sự nuôi dưỡng, vẻ đẹp và cân bằng.',
    
    'number.7.title': 'Ketu',
    'number.7.planet': 'Ketu (Nam Đẩu)',
    'number.7.shortDescription': 'Tâm linh, phân tích và trí tuệ. Số 7 thể hiện nội tâm, huyền bí và kiến thức bên trong.',
    
    'number.8.title': 'Thổ Tinh',
    'number.8.planet': 'Thổ Tinh',
    'number.8.shortDescription': 'Quyền lực, thành tựu và sức mạnh. Số 8 thể hiện tham vọng, tổ chức và thành công vật chất.',
    
    'number.9.title': 'Hỏa Tinh',
    'number.9.planet': 'Hỏa Tinh',
    'number.9.shortDescription': 'Dũng cảm, năng lượng và hoàn thành. Số 9 thể hiện nhân đạo, lãnh đạo và chuyển đổi.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (!translations[language][key as keyof typeof translations[typeof language]]) {
      console.warn(`Translation missing for key: ${key} in language ${language}`);
      // If the key doesn't exist in the current language, try to get it from English
      if (language !== 'en' && translations['en'][key as keyof typeof translations['en']]) {
        return translations['en'][key as keyof typeof translations['en']];
      }
      // Return the key itself if no translation exists
      return key;
    }
    
    return translations[language][key as keyof typeof translations[typeof language]];
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

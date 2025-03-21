import { useState, useRef } from 'react';
import { 
  calculateNameNumber, calculateBirthNumber, calculateLifeNumber,
  reduceToPythagoras
} from '../utils/numerologyCalculator';
import { numberMeanings } from '../utils/data';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { 
  Banknote, Heart, GraduationCap, Activity, 
  Users, TrendingUp, Briefcase, Award, 
  Compass, Zap 
} from 'lucide-react';
import { getDescription } from '../utils/numberDetailedMeanings';

interface CalculationResult {
  nameNumber: {
    steps: string;
    totalBeforeReduction: number;
    total: number;
    finalNumber: number;
  };
  birthNumber: {
    steps: string;
    totalBeforeReduction: number;
    total: number;
    finalNumber: number;
  };
  lifeNumber: {
    steps: string;
    totalBeforeReduction: number;
    total: number;
    finalNumber: number;
  };
}

const Calculator = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentTab, setCurrentTab] = useState<'birth' | 'name' | 'life'>(
    'birth'
  );
  
  const { t, language } = useLanguage();
  const resultRef = useRef<HTMLDivElement>(null);

  const isFormValid = name.trim() !== '' && 
    day !== '' && parseInt(day) > 0 && parseInt(day) <= 31 &&
    month !== '' && parseInt(month) > 0 && parseInt(month) <= 12 &&
    year !== '' && year.length === 4;

  const handleCalculate = () => {
    if (!isFormValid) return;
    
    setIsCalculating(true);
    setShowResult(false);
    
    console.log("Starting calculation with:", { name, day, month, year });
    
    try {
      const nameNum = calculateNameNumber(name);
      console.log("Name calculation result:", nameNum);
      
      const birthNum = calculateBirthNumber(
        parseInt(day),
        parseInt(month),
        parseInt(year)
      );
      console.log("Birth calculation result:", birthNum);
      
      const lifeNum = calculateLifeNumber(
        parseInt(day),
        parseInt(month),
        parseInt(year)
      );
      console.log("Life calculation result:", lifeNum);
      
      setResult({
        nameNumber: nameNum,
        birthNumber: birthNum,
        lifeNumber: lifeNum
      });
      
      setIsCalculating(false);
      setShowResult(true);
      
      if (resultRef.current) {
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    } catch (error) {
      console.error("Error during calculation:", error);
      setIsCalculating(false);
    }
  };

  const getMeaning = (number: number) => {
    return numberMeanings.find(m => m.number === number) || numberMeanings[0];
  };

  const getDetailedDescription = (number: number, lang: 'en' | 'vi'): string => {
    try {
      const description = getDescription(number, lang);
      if (description && description !== "Description not available" && description !== "Mô tả không có sẵn") {
        return description;
      }
      
      return getMeaning(reduceToPythagoras(number).finalNumber).description;
    } catch (error) {
      console.error("Error getting detailed description:", error);
      return lang === 'en' ? "Description not available" : "Mô tả không có sẵn";
    }
  };

  const renderScoreBar = (score: number, label: string, icon: React.ReactNode) => (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2">
        {icon}
        <span className="ml-1 text-sm text-gray-700">{score}%</span>
      </div>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  );

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
              {t('nav.calculate')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('calculator.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('calculator.subtitle')}
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">📝</span>
                  </div>
                  <label htmlFor="name" className="block text-gray-700 font-medium">
                    {t('calculator.fullName')}
                  </label>
                </div>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('calculator.fullName')}
                  className="input-field"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                  <label htmlFor="day" className="block text-gray-700 font-medium">
                    {t('calculator.day')}
                  </label>
                  <input
                    id="day"
                    type="number"
                    min="1"
                    max="31"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder={t('calculator.day')}
                    className="input-field"
                  />
                </div>
                
                <div className="space-y-4">
                  <label htmlFor="month" className="block text-gray-700 font-medium">
                    {t('calculator.month')}
                  </label>
                  <input
                    id="month"
                    type="number"
                    min="1"
                    max="12"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    placeholder={t('calculator.month')}
                    className="input-field"
                  />
                </div>
                
                <div className="space-y-4">
                  <label htmlFor="year" className="block text-gray-700 font-medium">
                    {t('calculator.year')}
                  </label>
                  <input
                    id="year"
                    type="number"
                    min="1900"
                    max="2100"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder={t('calculator.year')}
                    className="input-field"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  onClick={handleCalculate}
                  disabled={!isFormValid || isCalculating}
                  className={cn(
                    "w-full btn-primary",
                    (!isFormValid || isCalculating) && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('calculator.calculating')}
                    </div>
                  ) : (
                    t('calculator.button')
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {showResult && result && (
            <div 
              ref={resultRef}
              className="mt-12 glass-card rounded-xl overflow-hidden shadow-lg animate-scale-in"
            >
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setCurrentTab('birth')}
                  className={cn(
                    "flex-1 py-4 px-4 text-center font-medium transition-colors",
                    currentTab === 'birth' 
                      ? "bg-primary/10 text-primary border-b-2 border-primary" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  {t('tab.birth')}
                </button>
                <button
                  onClick={() => setCurrentTab('name')}
                  className={cn(
                    "flex-1 py-4 px-4 text-center font-medium transition-colors",
                    currentTab === 'name' 
                      ? "bg-primary/10 text-primary border-b-2 border-primary" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  {t('tab.name')}
                </button>
                <button
                  onClick={() => setCurrentTab('life')}
                  className={cn(
                    "flex-1 py-4 px-4 text-center font-medium transition-colors",
                    currentTab === 'life' 
                      ? "bg-primary/10 text-primary border-b-2 border-primary" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  {t('tab.life')}
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                {currentTab === 'birth' && (
                  <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center mb-8">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-4xl font-serif font-bold text-primary">
                            {result.birthNumber.finalNumber}
                          </span>
                        </div>
                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                          {getMeaning(result.birthNumber.finalNumber).planet}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 w-full max-w-sm">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">{t('result.steps')}</h4>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p className="font-medium">
                            {t('tab.birth')}: {result.birthNumber.totalBeforeReduction} ({result.birthNumber.steps})
                          </p>
                          {result.birthNumber.totalBeforeReduction > 9 && (
                            <p className="font-medium">→ {reduceToPythagoras(result.birthNumber.totalBeforeReduction).steps}</p>
                          )}
                          <p className="text-primary font-medium">{t('result.birthNumber')} {result.birthNumber.finalNumber}</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-center">
                      {getMeaning(result.birthNumber.finalNumber).title}
                    </h3>
                    
                    <div className="text-gray-700 leading-relaxed">
                      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-2">
                          {language === 'en' 
                            ? `Birth Day ${result.birthNumber.totalBeforeReduction} Meaning:`
                            : `Ý nghĩa Ngày Sinh ${result.birthNumber.totalBeforeReduction}:`}
                        </h4>
                        <p className="text-gray-700">
                          {getDetailedDescription(result.birthNumber.totalBeforeReduction, language as 'en' | 'vi')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentTab === 'name' && (
                  <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center mb-8">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-4xl font-serif font-bold text-primary">
                            {result.nameNumber.finalNumber}
                          </span>
                        </div>
                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                          {getMeaning(result.nameNumber.finalNumber).planet}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 w-full max-w-sm">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">{t('result.steps')}</h4>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p className="font-medium">
                            {t('tab.name')}: {result.nameNumber.totalBeforeReduction} ({result.nameNumber.steps})
                          </p>
                          {result.nameNumber.totalBeforeReduction > 9 && (
                            <p className="font-medium">→ {reduceToPythagoras(result.nameNumber.totalBeforeReduction).steps}</p>
                          )}
                          <p className="text-primary font-medium">{t('result.nameNumber')} {result.nameNumber.finalNumber}</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-center">
                      {getMeaning(result.nameNumber.finalNumber).title}
                    </h3>
                    
                    <div className="text-gray-700 leading-relaxed">
                      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-2">
                          {language === 'en' 
                            ? `Name Number ${result.nameNumber.totalBeforeReduction} Meaning:`
                            : `Ý nghĩa Số Tên ${result.nameNumber.totalBeforeReduction}:`}
                        </h4>
                        <p className="text-gray-700">
                          {getDetailedDescription(result.nameNumber.totalBeforeReduction, language as 'en' | 'vi')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentTab === 'life' && (
                  <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center mb-8">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-4xl font-serif font-bold text-primary">
                            {result.lifeNumber.finalNumber}
                          </span>
                        </div>
                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                          {getMeaning(result.lifeNumber.finalNumber).planet}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 w-full max-w-sm">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">{t('result.steps')}</h4>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p className="font-medium">
                            {t('tab.life')}: {result.lifeNumber.totalBeforeReduction} ({result.lifeNumber.steps})
                          </p>
                          {result.lifeNumber.totalBeforeReduction > 9 && (
                            <p className="font-medium">→ {reduceToPythagoras(result.lifeNumber.totalBeforeReduction).steps}</p>
                          )}
                          <p className="text-primary font-medium">{t('result.lifeNumber')} {result.lifeNumber.finalNumber}</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-center">
                      {getMeaning(result.lifeNumber.finalNumber).title}
                    </h3>
                    
                    <div className="text-gray-700 leading-relaxed">
                      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-2">
                          {language === 'en' 
                            ? `Life Number ${result.lifeNumber.totalBeforeReduction} Meaning:`
                            : `Ý nghĩa Số Cuộc Đời ${result.lifeNumber.totalBeforeReduction}:`}
                        </h4>
                        <p className="text-gray-700">
                          {getDetailedDescription(result.lifeNumber.totalBeforeReduction, language as 'en' | 'vi')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;

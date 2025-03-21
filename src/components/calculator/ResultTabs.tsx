
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';
import { CalculationResult } from './types';
import { numberMeanings } from '../../utils/data';
import { getDescription } from '../../utils/numberDetailedMeanings';
import { reduceToPythagoras } from '../../utils/numerologyCalculator';
import NumberDisplay from './NumberDisplay';
import NumberDetailSection from './NumberDetailSection';

interface ResultTabsProps {
  result: CalculationResult;
  currentTab: 'birth' | 'name' | 'life';
  setCurrentTab: (tab: 'birth' | 'name' | 'life') => void;
}

const ResultTabs = ({ result, currentTab, setCurrentTab }: ResultTabsProps) => {
  const { t, language } = useLanguage();

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

  return (
    <div className="mt-12 glass-card rounded-xl overflow-hidden shadow-lg animate-scale-in">
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
            <NumberDisplay 
              number={result.birthNumber} 
              planet={getMeaning(result.birthNumber.finalNumber).planet} 
              label={t('tab.birth')}
              resultLabel={t('result.birthNumber')}
            />
            
            <h3 className="text-2xl font-bold text-center">
              {getMeaning(result.birthNumber.finalNumber).title}
            </h3>
            
            <NumberDetailSection 
              meaning={getMeaning(result.birthNumber.finalNumber)} 
              detailedDescription={getDetailedDescription(result.birthNumber.totalBeforeReduction, language as 'en' | 'vi')}
              numberType={t('tab.birth')}
              number={result.birthNumber.totalBeforeReduction}
            />
          </div>
        )}
        
        {currentTab === 'name' && (
          <div className="space-y-6">
            <NumberDisplay 
              number={result.nameNumber} 
              planet={getMeaning(result.nameNumber.finalNumber).planet} 
              label={t('tab.name')}
              resultLabel={t('result.nameNumber')}
            />
            
            <h3 className="text-2xl font-bold text-center">
              {getMeaning(result.nameNumber.finalNumber).title}
            </h3>
            
            <NumberDetailSection 
              meaning={getMeaning(result.nameNumber.finalNumber)} 
              detailedDescription={getDetailedDescription(result.nameNumber.totalBeforeReduction, language as 'en' | 'vi')}
              numberType={t('tab.name')}
              number={result.nameNumber.totalBeforeReduction}
            />
          </div>
        )}
        
        {currentTab === 'life' && (
          <div className="space-y-6">
            <NumberDisplay 
              number={result.lifeNumber} 
              planet={getMeaning(result.lifeNumber.finalNumber).planet} 
              label={t('tab.life')}
              resultLabel={t('result.lifeNumber')}
            />
            
            <h3 className="text-2xl font-bold text-center">
              {getMeaning(result.lifeNumber.finalNumber).title}
            </h3>
            
            <NumberDetailSection 
              meaning={getMeaning(result.lifeNumber.finalNumber)} 
              detailedDescription={getDetailedDescription(result.lifeNumber.totalBeforeReduction, language as 'en' | 'vi')}
              numberType={t('tab.life')}
              number={result.lifeNumber.totalBeforeReduction}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultTabs;

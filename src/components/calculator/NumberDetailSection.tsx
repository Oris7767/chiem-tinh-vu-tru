
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedContent } from '../../utils/i18n';
import { NumberMeaning } from '../../utils/data';
import ScoreBar from './ScoreBar';
import { 
  Banknote, Heart, GraduationCap, Activity, 
  Users, TrendingUp, Briefcase, Award, 
  Compass, Zap 
} from 'lucide-react';

interface NumberDetailSectionProps {
  meaning: NumberMeaning;
  detailedDescription: string;
  numberType: string;
  number: number;
}

const NumberDetailSection = ({ 
  meaning, 
  detailedDescription, 
  numberType, 
  number 
}: NumberDetailSectionProps) => {
  const { t, language } = useLanguage();
  
  // Helper function to get localized arrays with fallback
  const getLocalizedArray = (array: string[], fallbackArray: string[] = []): string[] => {
    if (language === 'vi') {
      // If we have Vietnamese translations for this array, use them
      const viArray = meaning[`${array === meaning.strengths ? 'strengths' : 'challenges'}_vi`] as string[] | undefined;
      return viArray && viArray.length > 0 ? viArray : fallbackArray;
    }
    return array;
  };
  
  // Get localized strengths and challenges
  const localizedStrengths = getLocalizedArray(meaning.strengths);
  const localizedChallenges = getLocalizedArray(meaning.challenges);
  
  return (
    <div className="text-gray-700 leading-relaxed">
      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-medium text-blue-800 mb-2">
          {language === 'en' 
            ? `${numberType} ${number} Meaning:`
            : `Ý nghĩa ${numberType} ${number}:`}
        </h4>
        <p className="text-gray-700">
          {detailedDescription}
        </p>
      </div>
      
      <div className="grid grid-cols-5 gap-4 py-6 border-t border-b border-gray-200">
        <ScoreBar score={meaning.finance} label={t('aspect.finance')} icon={<Banknote className="w-10 h-10 text-green-600" />} />
        <ScoreBar score={meaning.romance} label={t('aspect.romance')} icon={<Heart className="w-10 h-10 text-red-500" />} />
        <ScoreBar score={meaning.education} label={t('aspect.education')} icon={<GraduationCap className="w-10 h-10 text-blue-500" />} />
        <ScoreBar score={meaning.health} label={t('aspect.health')} icon={<Activity className="w-10 h-10 text-purple-500" />} />
        <ScoreBar score={meaning.family} label={t('aspect.family')} icon={<Users className="w-10 h-10 text-orange-500" />} />
      </div>
      
      <div className="grid grid-cols-5 gap-4 pb-6">
        <ScoreBar score={meaning.growth} label={t('aspect.growth')} icon={<TrendingUp className="w-10 h-10 text-teal-500" />} />
        <ScoreBar score={meaning.career_score} label={t('aspect.career')} icon={<Briefcase className="w-10 h-10 text-indigo-500" />} />
        <ScoreBar score={meaning.reputation} label={t('aspect.reputation')} icon={<Award className="w-10 h-10 text-yellow-600" />} />
        <ScoreBar score={meaning.spirituality} label={t('aspect.spirituality')} icon={<Compass className="w-10 h-10 text-cyan-600" />} />
        <ScoreBar score={meaning.luck} label={t('aspect.luck')} icon={<Zap className="w-10 h-10 text-amber-500" />} />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 pt-2">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">{t('section.strengths')}</h4>
          <ul className="space-y-2">
            {localizedStrengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 mb-3">{t('section.challenges')}</h4>
          <ul className="space-y-2">
            {localizedChallenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6 mt-6">
        <h4 className="font-medium text-gray-900 mb-3">{t('section.career')}</h4>
        <p className="text-gray-700">
          {getLocalizedContent(meaning.career_vi, language, meaning.career)}
        </p>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-medium text-gray-900 mb-3">{t('section.relationships')}</h4>
        <p className="text-gray-700">
          {getLocalizedContent(meaning.relationships_vi, language, meaning.relationships)}
        </p>
      </div>
    </div>
  );
};

export default NumberDetailSection;

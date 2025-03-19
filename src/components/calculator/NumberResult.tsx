
import { numberMeanings } from '../../utils/data';
import { reduceToPythagoras } from '../../utils/numerologyCalculator';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Banknote, Heart, GraduationCap, Activity, 
  Users, TrendingUp, Briefcase, Award, 
  Compass, Zap 
} from 'lucide-react';
import NumberScoreBar from './NumberScoreBar';

interface NumberDataDisplay {
  steps: string;
  totalBeforeReduction: number;
  total: number;
  finalNumber: number;
}

interface NumberResultProps {
  data: NumberDataDisplay;
  type: 'birth' | 'name' | 'life';
}

const NumberResult = ({ data, type }: NumberResultProps) => {
  const { t, language } = useLanguage();

  const getMeaning = (number: number) => {
    return numberMeanings.find(m => m.number === number) || numberMeanings[0];
  };

  const getDetailedDescription = (number: number, lang: 'en' | 'vi'): string => {
    const { getDetailedMeaning } = require('../../utils/numberDetailedMeanings');
    const detailedMeaning = getDetailedMeaning(number);
    
    if (detailedMeaning) {
      return detailedMeaning.description[lang];
    }
    
    return getMeaning(reduceToPythagoras(number).finalNumber).description;
  };

  const renderScoreBars = () => {
    const meaning = getMeaning(data.finalNumber);
    
    return (
      <>
        <div className="grid grid-cols-5 gap-4 py-6 border-t border-b border-gray-200">
          <NumberScoreBar score={meaning.finance} label={t('aspect.finance')} icon={<Banknote className="w-5 h-5 text-green-600" />} />
          <NumberScoreBar score={meaning.romance} label={t('aspect.romance')} icon={<Heart className="w-5 h-5 text-red-500" />} />
          <NumberScoreBar score={meaning.education} label={t('aspect.education')} icon={<GraduationCap className="w-5 h-5 text-blue-500" />} />
          <NumberScoreBar score={meaning.health} label={t('aspect.health')} icon={<Activity className="w-5 h-5 text-purple-500" />} />
          <NumberScoreBar score={meaning.family} label={t('aspect.family')} icon={<Users className="w-5 h-5 text-orange-500" />} />
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          <NumberScoreBar score={meaning.growth} label={t('aspect.growth')} icon={<TrendingUp className="w-5 h-5 text-teal-500" />} />
          <NumberScoreBar score={meaning.career_score} label={t('aspect.career')} icon={<Briefcase className="w-5 h-5 text-indigo-500" />} />
          <NumberScoreBar score={meaning.reputation} label={t('aspect.reputation')} icon={<Award className="w-5 h-5 text-yellow-600" />} />
          <NumberScoreBar score={meaning.spirituality} label={t('aspect.spirituality')} icon={<Compass className="w-5 h-5 text-cyan-600" />} />
          <NumberScoreBar score={meaning.luck} label={t('aspect.luck')} icon={<Zap className="w-5 h-5 text-amber-500" />} />
        </div>
      </>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-serif font-bold text-primary">
              {data.finalNumber}
            </span>
          </div>
          <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
            {getMeaning(data.finalNumber).planet}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 w-full max-w-sm">
          <h4 className="text-sm font-medium text-gray-700 mb-2">{t('result.steps')}</h4>
          <div className="text-xs text-gray-600 space-y-1">
            <p className="font-medium">
              {t(`tab.${type}`)}: {data.totalBeforeReduction} ({data.steps})
            </p>
            {data.totalBeforeReduction > 9 && (
              <p className="font-medium">→ {reduceToPythagoras(data.totalBeforeReduction).steps}</p>
            )}
            <p className="text-primary font-medium">{t(`result.${type}Number`)} {data.finalNumber}</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-center">
        {getMeaning(data.finalNumber).title}
      </h3>
      
      <div className="text-gray-700 leading-relaxed">
        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="font-medium text-blue-800 mb-2">
            {language === 'en' 
              ? `${type.charAt(0).toUpperCase() + type.slice(1)} Number ${data.totalBeforeReduction} Meaning:`
              : `Ý nghĩa Số ${type === 'birth' ? 'Sinh' : type === 'name' ? 'Tên' : 'Cuộc Đời'} ${data.totalBeforeReduction}:`}
          </h4>
          <p className="text-gray-700">
            {getDetailedDescription(data.totalBeforeReduction, language as 'en' | 'vi')}
          </p>
        </div>
        
        <p>
          {language === 'en' ? 
            `A person with ${type} number ${data.finalNumber} may be blessed with ` : 
            `Người có số ${type === 'birth' ? 'sinh' : type === 'name' ? 'tên' : 'cuộc đời'} ${data.finalNumber} có thể được ban phước với `}
          <span className="text-green-600 font-medium">
            {language === 'en' ? 'abundant riches' : 'tài sản dồi dào'}
          </span>. 
          {language === 'en' ? 
            'Their achievements and fame may spread far and wide, often becoming the ' : 
            'Thành tựu và danh tiếng của họ có thể lan rộng khắp nơi, thường trở thành '}
          <span className="text-green-600 font-medium">
            {language === 'en' ? 'envy of others' : 'sự ghen tị của người khác'}
          </span>. 
          {language === 'en' ?
            'They may lead eventful, dynamic lives, often involving a lot of ' :
            'Họ có thể sống một cuộc sống sôi động và đầy biến cố, thường xuyên '}
          <span className="text-green-600 font-medium">
            {language === 'en' ? 'travel' : 'du lịch'}
          </span>.
        </p>
        
        {renderScoreBars()}
        
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">{t('section.strengths')}</h4>
            <ul className="space-y-2">
              {getMeaning(data.finalNumber).strengths.map((strength, index) => (
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
              {getMeaning(data.finalNumber).challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {type === 'birth' || type === 'name' ? (
          <>
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h4 className="font-medium text-gray-900 mb-3">{t('section.career')}</h4>
              <p className="text-gray-700">
                {getMeaning(data.finalNumber).career}
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h4 className="font-medium text-gray-900 mb-3">{t('section.relationships')}</h4>
              <p className="text-gray-700">
                {getMeaning(data.finalNumber).relationships}
              </p>
            </div>
          </>
        ) : (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <p className="italic text-gray-600 text-center">
              {language === 'en' ? 
                `${t('tab.life')} represents the sum of all digits in your full birth date, showing your overall life path and destiny.` : 
                `${t('tab.life')} thể hiện tổng tất cả các chữ số trong ngày sinh đầy đủ của bạn, cho thấy con đường đời và số phận tổng thể của bạn.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberResult;

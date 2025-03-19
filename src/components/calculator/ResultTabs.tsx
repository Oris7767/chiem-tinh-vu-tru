
import { cn } from '../../lib/utils';
import { useLanguage } from '../../context/LanguageContext';

type TabType = 'birth' | 'name' | 'life';

interface ResultTabsProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const ResultTabs = ({ currentTab, onTabChange }: ResultTabsProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex border-b border-gray-200">
      <button
        onClick={() => onTabChange('birth')}
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
        onClick={() => onTabChange('name')}
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
        onClick={() => onTabChange('life')}
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
  );
};

export default ResultTabs;


import { useState, useRef } from 'react';
import { 
  calculateNameNumber, calculateBirthNumber, calculateLifeNumber
} from '../utils/numerologyCalculator';
import { useLanguage } from '../context/LanguageContext';
import CalculatorForm from './calculator/CalculatorForm';
import ResultTabs from './calculator/ResultTabs';
import NumberResult from './calculator/NumberResult';

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
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentTab, setCurrentTab] = useState<'birth' | 'name' | 'life'>('birth');
  
  const { t } = useLanguage();
  const resultRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (name: string, day: string, month: string, year: string) => {
    setIsCalculating(true);
    setShowResult(false);
    
    setTimeout(() => {
      const nameNum = calculateNameNumber(name);
      const birthNum = calculateBirthNumber(
        parseInt(day),
        parseInt(month),
        parseInt(year)
      );
      const lifeNum = calculateLifeNumber(
        parseInt(day),
        parseInt(month),
        parseInt(year)
      );
      
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
    }, 1500);
  };

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
          
          <CalculatorForm 
            onCalculate={handleCalculate}
            isCalculating={isCalculating}
          />
          
          {showResult && result && (
            <div 
              ref={resultRef}
              className="mt-12 glass-card rounded-xl overflow-hidden shadow-lg animate-scale-in"
            >
              <ResultTabs 
                currentTab={currentTab}
                onTabChange={setCurrentTab}
              />
              
              <div className="p-6 md:p-8">
                {currentTab === 'birth' && (
                  <NumberResult 
                    data={result.birthNumber}
                    type="birth"
                  />
                )}
                
                {currentTab === 'name' && (
                  <NumberResult 
                    data={result.nameNumber}
                    type="name"
                  />
                )}
                
                {currentTab === 'life' && (
                  <NumberResult 
                    data={result.lifeNumber}
                    type="life"
                  />
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

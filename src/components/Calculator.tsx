
import { useState, useRef } from 'react';
import { 
  calculateNameNumber, calculateBirthNumber, calculateLifeNumber
} from '../utils/numerologyCalculator';
import { useLanguage } from '../context/LanguageContext';
import { CalculationResult } from './calculator/types';
import InputForm from './calculator/InputForm';
import ResultTabs from './calculator/ResultTabs';

const Calculator = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentTab, setCurrentTab] = useState<'birth' | 'name' | 'life'>('birth');
  
  const { t } = useLanguage();
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
          
          <InputForm
            name={name}
            setName={setName}
            day={day}
            setDay={setDay}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            isFormValid={isFormValid}
            isCalculating={isCalculating}
            handleCalculate={handleCalculate}
          />
          
          {showResult && result && (
            <div ref={resultRef}>
              <ResultTabs 
                result={result}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;

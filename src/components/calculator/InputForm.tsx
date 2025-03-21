
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

interface InputFormProps {
  name: string;
  setName: (name: string) => void;
  day: string;
  setDay: (day: string) => void;
  month: string;
  setMonth: (month: string) => void;
  year: string;
  setYear: (year: string) => void;
  isFormValid: boolean;
  isCalculating: boolean;
  handleCalculate: () => void;
}

const InputForm = ({
  name,
  setName,
  day,
  setDay,
  month,
  setMonth,
  year,
  setYear,
  isFormValid,
  isCalculating,
  handleCalculate
}: InputFormProps) => {
  const { t } = useLanguage();

  return (
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
  );
};

export default InputForm;

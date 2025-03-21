
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { reduceToPythagoras } from '../../utils/numerologyCalculator';

interface CalculationStepsProps {
  label: string;
  totalBeforeReduction: number;
  steps: string;
  finalNumber: number;
  resultLabel: string;
}

const CalculationSteps = ({ 
  label, 
  totalBeforeReduction, 
  steps, 
  finalNumber,
  resultLabel 
}: CalculationStepsProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-50 rounded-lg p-4 w-full max-w-sm">
      <h4 className="text-sm font-medium text-gray-700 mb-2">{t('result.steps')}</h4>
      <div className="text-xs text-gray-600 space-y-1">
        <p className="font-medium">
          {label}: {totalBeforeReduction} ({steps})
        </p>
        {totalBeforeReduction > 9 && (
          <p className="font-medium">→ {reduceToPythagoras(totalBeforeReduction).steps}</p>
        )}
        <p className="text-primary font-medium">{resultLabel} {finalNumber}</p>
      </div>
    </div>
  );
};

export default CalculationSteps;

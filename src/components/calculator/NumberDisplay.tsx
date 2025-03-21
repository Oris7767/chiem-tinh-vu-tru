
import React from 'react';
import CalculationSteps from './CalculationSteps';

interface NumberDisplayProps {
  number: {
    steps: string;
    totalBeforeReduction: number;
    total: number;
    finalNumber: number;
  };
  planet: string;
  label: string;
  resultLabel: string;
}

const NumberDisplay = ({ number, planet, label, resultLabel }: NumberDisplayProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-4xl font-serif font-bold text-primary">
            {number.finalNumber}
          </span>
        </div>
        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
          {planet}
        </div>
      </div>
      
      <CalculationSteps
        label={label}
        totalBeforeReduction={number.totalBeforeReduction}
        steps={number.steps}
        finalNumber={number.finalNumber}
        resultLabel={resultLabel}
      />
    </div>
  );
};

export default NumberDisplay;


import React from 'react';

interface NumberScoreBarProps {
  score: number;
  label: string;
  icon: React.ReactNode;
}

const NumberScoreBar = ({ score, label, icon }: NumberScoreBarProps) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2">
        {icon}
        <span className="ml-1 text-sm text-gray-700">{score}%</span>
      </div>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  );
};

export default NumberScoreBar;


import React from 'react';

interface ScoreBarProps {
  score: number;
  label: string;
  icon: React.ReactNode;
}

const ScoreBar = ({ score, label, icon }: ScoreBarProps) => (
  <div className="text-center">
    <div className="flex items-center justify-center mb-2">
      {React.cloneElement(icon as React.ReactElement, { className: "w-10 h-10" })}
      <span className="ml-1 text-sm font-semibold text-gray-700">{score}%</span>
    </div>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

export default ScoreBar;

// src/components/ProgressBar.jsx

import React from 'react';
import { BRAND_COLORS } from '../utils/constants';

const ProgressBar = ({ current, total }) => {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="mb-6" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold text-gray-700">
          Question {current + 1} of {total}
        </span>
        <span className="text-sm text-gray-600">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
             width: `${percentage}%`,
            backgroundColor: BRAND_COLORS.secondary
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
// src/components/Options.jsx

import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { BRAND_COLORS } from '../utils/constants';

const Options = ({ options, selectedAnswer, correctAnswer, isAnswered, onSelect }) => {
  const getOptionStyle = (index) => {
    if (!isAnswered) {
      return selectedAnswer === index
         ? 'border-gray-400 bg-gray-50'
         : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50';
    }

    if (index === correctAnswer) {
      return 'border-2 bg-green-50';
    }

    if (index === selectedAnswer && index !== correctAnswer) {
      return 'border-2 bg-red-50';
    }

    return 'border-gray-200 bg-gray-50 opacity-60';
  };

  const getOptionBorderColor = (index) => {
    if (!isAnswered) return undefined;
    if (index === correctAnswer) return BRAND_COLORS.correct;
    if (index === selectedAnswer && index !== correctAnswer) return BRAND_COLORS.incorrect;
    return undefined;
  };

  return (
    <div className="space-y-3" role="radiogroup" aria-label="Answer options">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          disabled={isAnswered}
          className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-4 ${getOptionStyle(index)}`}

          style={{ borderColor: getOptionBorderColor(index) }}
          role="radio"
          aria-checked={selectedAnswer === index}
          aria-label={`Option ${index + 1}: ${option}`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 cursor-pointer">
              <span className="shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm"
                    style={{
                       borderColor: getOptionBorderColor(index) || '#D1D5DB',
                      color: getOptionBorderColor(index) || '#6B7280'
                    }}>
                {index + 1}
              </span>
              <span className="text-sm sm:text-base text-gray-800 font-medium">{option}</span>
            </div>

            {isAnswered && index === correctAnswer && (
              <CheckCircle size={24} style={{ color: BRAND_COLORS.correct }} aria-hidden="true" />
            )}

            {isAnswered && index === selectedAnswer && index !== correctAnswer && (
              <XCircle size={24} style={{ color: BRAND_COLORS.incorrect }} aria-hidden="true" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Options;
// src/components/Feedback.jsx

import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { BRAND_COLORS } from '../utils/constants';

const Feedback = ({ isCorrect, explanation, correctAnswer, options }) => {
  return (
    <div
       className="mt-6 p-3 sm:p-4 rounded-lg border-2"
      style={{
         backgroundColor: isCorrect ? '#F0FDF4' : '#FEF2F2',
        borderColor: isCorrect ? BRAND_COLORS.correct : BRAND_COLORS.incorrect
      }}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        {isCorrect ? (
          <CheckCircle size={24} style={{ color: BRAND_COLORS.correct }} className="shrink-0 mt-0.5" />
        ) : (
          <XCircle size={24} style={{ color: BRAND_COLORS.incorrect }} className="shrink-0 mt-0.5" />
        )}

        <div className="flex-1">
          <h3 className="font-bold text-base sm:text-lg mb-2" style={{ color: isCorrect ? '#166534' : '#991B1B' }}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </h3>

          {!isCorrect && (
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <strong>Correct answer:</strong> {options[correctAnswer]}
            </p>
          )}

          <p className="text-gray-700 text-sm leading-relaxed">
            {explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
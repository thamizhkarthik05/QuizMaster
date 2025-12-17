// src/components/QuestionCard.jsx

import React from 'react';
const QuestionCard = ({ question, number }) => {
  // Primary Button color: #EC265F
  const questionNumberColor = '#EC265F'; 
  
  return (
    <div className="mb-6">
      <div className="flex items-start gap-3">
        {/* Applying the Primary Button color to the question number circle */}
        <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: questionNumberColor }}>
          {number}
        </span>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
          {question}
        </h2>
      </div>
    </div>
  );
};

export default QuestionCard;
// src/components/Summary.jsx

import React from 'react';
import { Award, CheckCircle, XCircle } from 'lucide-react';
import Button from './Button';
import { BRAND_COLORS } from '../utils/constants';

const Summary = ({ questions, answers, score, maxStreak, onReset }) => {
  const percentage = Math.round((score / questions.length) * 100);
  const isPerfect = score === questions.length;

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Score Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center">
          {isPerfect && (
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-linear-to-r from-yellow-400 to-yellow-600">
                <Award size={48} className="text-white" />
              </div>
            </div>
          )}

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {isPerfect ? '🎉 Perfect Score!' : 'Quiz Complete!'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-4xl font-bold" style={{ color: BRAND_COLORS.primary }}>
                {score}/{questions.length}
              </div>
              <div className="text-gray-600 mt-2">Correct Answers</div>
            </div>
          
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-4xl font-bold" style={{ color: BRAND_COLORS.secondary }}>
                {percentage}%
              </div>
              <div className="text-gray-600 mt-2">Score</div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-4xl font-bold text-orange-500">
                {maxStreak} 🔥
              </div>
              <div className="text-gray-600 mt-2">Best Streak</div>
            </div>
          </div>

          <Button onClick={onReset} variant="primary" className='cursor-pointer'>
            Take Quiz Again
          </Button>
        </div>

        {/* Review Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📋 Review Your Answers</h3>

          <div className="space-y-6">
            {answers.map((answer, index) => (
              <div
                 key={index}
                className="p-6 rounded-lg border-2"
                style={{
                   backgroundColor: answer.isCorrect ? '#F0FDF4' : '#FEF2F2',
                  borderColor: answer.isCorrect ? BRAND_COLORS.correct : BRAND_COLORS.incorrect
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: BRAND_COLORS.primary }}>
                    {index + 1}
                  </span>
                  <h4 className="font-semibold text-gray-800 flex-1">{answer.question}</h4>
                  {answer.isCorrect ? (
                    <CheckCircle size={24} style={{ color: BRAND_COLORS.correct }} />
                  ) : (
                    <XCircle size={24} style={{ color: BRAND_COLORS.incorrect }} />
                  )}
                </div>

                <div className="ml-11 space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Your answer: </span>
                    <span className={answer.isCorrect ? 'text-green-700' : 'text-red-700'}>
                      {questions[index].options[answer.selectedAnswer]}
                    </span>
                  </div>

                  {!answer.isCorrect && (
                    <div>
                      <span className="font-semibold text-gray-700">Correct answer: </span>
                      <span className="text-green-700">
                        {questions[index].options[answer.correctAnswer]}
                      </span>
                    </div>
                  )}

                  <div className="pt-2 text-gray-600 italic">
                    {answer.explanation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Summary;
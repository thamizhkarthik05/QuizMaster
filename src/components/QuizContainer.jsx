import React from 'react';
import { useKeyboard } from '../hooks/useKeyboard';
import Button from './Button';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import Options from './Options';
import Feedback from './Feedback';
import StreakBadge from './StreakBadge';

// --- Color Definitions ---
const BODY_BG = '#F9FAFB';
const CARD_BG = '#FFFFFF';
// -------------------------

const QuizContainer = ({
  questions,
  quizState,
  onSelectAnswer,
  onNextQuestion
}) => {
  const question = questions[quizState.currentQuestion];

  useKeyboard(
    quizState.isAnswered,
    quizState.selectedAnswer,
    question.options.length,
    onSelectAnswer,
    onNextQuestion
  );

  return (
    <main
      className="py-10 w-full flex justify-center"
      style={{ backgroundColor: BODY_BG }}
    >
      <div className="w-full max-w-3xl px-4 ">
        {/* ================= CARD WRAPPER ================= */}
        <div className="relative">

          {/* ================= MASCOT ================= */}
          <div className="h-20 flex justify-center z-10">
          <img
              src="/quiz-mascot.png"
              alt="Quiz Mascot"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mt-1.5"
            />
          </div>

          {/* ================= QUIZ CARD ================= */}
            <div
              className="
                relative
                z-10
                rounded-2xl
                shadow-xl
                bg-white
                p-4 sm:p-6 md:p-8
                pt-16 sm:pt-20
              "
            >
            {/* Progress */}
            <ProgressBar
              current={quizState.currentQuestion}
              total={questions.length}
            />

            {/* Streak */}
            {quizState.streak >= 2 && (
              <div className="mb-4 flex justify-center">
                <StreakBadge streak={quizState.streak} />
              </div>
            )}

            {/* Question */}
            <QuestionCard
              question={question.question}
              number={quizState.currentQuestion + 1}
            />

            {/* Options */}
            <Options
              options={question.options}
              selectedAnswer={quizState.selectedAnswer}
              correctAnswer={question.correctAnswer}
              isAnswered={quizState.isAnswered}
              onSelect={onSelectAnswer}
            />

            {/* Feedback + Next */}
            {quizState.isAnswered && (
              <>
                <Feedback
                  isCorrect={
                    quizState.selectedAnswer === question.correctAnswer
                  }
                  explanation={question.explanation}
                  correctAnswer={question.correctAnswer}
                  options={question.options}
                />

                <div className="mt-6 flex justify-end">
                  <Button className='cursor-pointer'
                    onClick={onNextQuestion}
                    variant="primary"
                    ariaLabel={
                      quizState.currentQuestion === questions.length - 1
                        ? 'Finish quiz'
                        : 'Next question'
                    }
                  >
                    {quizState.currentQuestion === questions.length - 1
                      ? 'Finish Quiz'
                      : 'Next Question →'}
                  </Button>
                </div>
              </>
            )}

            {/* Keyboard Hint */}
            {!quizState.isAnswered && (
              <div className="mt-6 text-center text-sm text-gray-500">
                💡 Keyboard shortcuts: Press 1-{question.options.length} to
                select, Enter to continue
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuizContainer;

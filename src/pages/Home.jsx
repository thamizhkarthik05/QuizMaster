import React from 'react';
import QuizContainer from '../components/QuizContainer';
import Summary from '../components/Summary';
import { useQuiz } from '../hooks/useQuiz';
import quizData from '../data/quizData.json'; 

const Home = () => {
  const questions = quizData.questions;
  const quizState = useQuiz(questions);

  return (
    <>
      {!quizState.isComplete ? (
        <QuizContainer
          questions={questions}
          quizState={quizState}
          onSelectAnswer={quizState.selectAnswer}
          onNextQuestion={quizState.nextQuestion}
        />
      ) : (
        <Summary
          questions={questions}
          answers={quizState.answers}
          score={quizState.score}
          maxStreak={quizState.maxStreak}
          onReset={quizState.resetQuiz}
        />
      )}
    </>
  );
};

export default Home;
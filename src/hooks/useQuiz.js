// src/hooks/useQuiz.js

import { useState } from 'react';

// Quiz state management hook
export const useQuiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const selectAnswer = (index) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    const isCorrect = index === questions[currentQuestion].correctAnswer;

    setAnswers(prev => [...prev, {
      questionId: questions[currentQuestion].id,
      question: questions[currentQuestion].question,
      selectedAnswer: index,
      correctAnswer: questions[currentQuestion].correctAnswer,
      isCorrect,
      explanation: questions[currentQuestion].explanation
    }]);

    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => {
        const newStreak = prev + 1;
        setMaxStreak(max => Math.max(max, newStreak));
        return newStreak;
      });
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setAnswers([]);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setIsComplete(false);
  };

  return {
    currentQuestion,
    selectedAnswer,
    isAnswered,
    answers,
    score,
    streak,
    maxStreak,
    isComplete,
    selectAnswer,
    nextQuestion,
    resetQuiz
  };
};
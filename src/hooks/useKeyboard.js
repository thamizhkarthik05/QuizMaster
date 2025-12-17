// src/hooks/useKeyboard.js

import { useEffect, useCallback } from 'react';

// Keyboard navigation hook
export const useKeyboard = (isAnswered, selectedAnswer, optionsCount, onSelect, onNext) => {
  const handleKeyPress = useCallback((e) => {
    // Number keys 1-4 for selecting options
    if (!isAnswered && e.key >= '1' && e.key <= String(optionsCount)) {
      const index = parseInt(e.key) - 1;
      onSelect(index);
    }

    // Enter key to proceed
    if (isAnswered && e.key === 'Enter') {
      onNext();
    }
  }, [isAnswered, optionsCount, onSelect, onNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
};
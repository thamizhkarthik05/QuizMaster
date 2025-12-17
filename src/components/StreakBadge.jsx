// src/components/StreakBadge.jsx

import React from 'react';
import { TrendingUp } from 'lucide-react';

const StreakBadge = ({ streak }) => {
  if (streak < 2) return null;

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-lg animate-pulse">
      <TrendingUp size={20} />
      <span>{streak} Streak! 🔥</span>
    </div>
  );
};

export default StreakBadge;
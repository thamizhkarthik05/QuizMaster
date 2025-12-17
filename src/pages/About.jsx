import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Code, Target, Zap, Heart, RefreshCw } from 'lucide-react';

const BRAND_COLORS = {
  primary: '#EC265F',
  secondary: '#26ECB4',
};

// ================= CUSTOM HOOK =================
const useQuoteFetcher = () => {
  const [quote, setQuote] = useState(
    "Click the button to generate your first piece of wisdom!"
  );
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasFetched = useRef(false);

  const getAdvice = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setQuote(data.slip.advice);
      setCount((c) => c + 1);
    } catch (e) {
      console.error("Fetching quote failed:", e);
      setError(
        "Failed to fetch advice. The internet is having a philosophical crisis."
      );
      setQuote("Error loading quote.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    getAdvice();
  }, []);

  return { quote, count, isLoading, error, getAdvice };
};
// =================================================

const About = () => {
  const { quote, count, isLoading, error, getAdvice } = useQuoteFetcher();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl bg-[#F9FAFB]">

      {/* ===== TITLE ===== */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-800">
        <Sparkles
          size={36}
          className="inline mr-3 align-text-top"
          style={{ color: BRAND_COLORS.primary }}
        />
        Welcome to the QuizMaster Headquarters!
      </h2>

      <p className="text-xl text-center mb-10 text-gray-600">
        We're less of an app, more of a friendly knowledge-gobbling robot.
      </p>

      {/* ===== QUOTE CARD ===== */}
      <div
        className="bg-white p-6 md:p-8 rounded-xl shadow-2xl mb-12 border-l-8 border-r-8"
        style={{
          borderColor: BRAND_COLORS.secondary,
          borderTop: '4px solid #f3f4f6',
          borderBottom: '4px solid #f3f4f6',
        }}
      >
        <h3 className="text-lg font-bold text-gray-700 mb-3 text-center">
          Your Daily Wisdom 
        </h3>

        <div className="min-h-17.5 flex flex-col justify-center text-center">
          {isLoading ? (
            <p className="text-xl italic text-gray-500 flex items-center justify-center">
              <RefreshCw size={20} className="animate-spin mr-2" />
              Loading genius thoughts...
            </p>
          ) : error ? (
            <p className="text-xl text-red-600 font-semibold">{error}</p>
          ) : (
            <p className="text-lg sm:text-xl italic font-serif text-gray-900 leading-snug">
              "{quote}"
            </p>
          )}
        </div>

        <div className="text-center mt-5">
          <button
            onClick={getAdvice}
            disabled={isLoading}
            className="px-6 py-3  cursor-pointer text-base rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            <Zap size={18} className="inline mr-2" />
            {isLoading ? 'Fetching Wisdom...' : 'Generate New Quote'}
          </button>

          {count > 0 && (
            <p className="text-sm text-gray-500 mt-3">
              You have generated{' '}
              <b className="font-extrabold text-gray-800">{count}</b> quotes!
            </p>
          )}
        </div>
      </div>

      {/* ===== INFO CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div
          className="bg-white p-6 rounded-lg shadow-md border-t-4 transition-transform duration-300 hover:scale-105"
          style={{ borderColor: BRAND_COLORS.primary }}
        >
          <Code size={32} style={{ color: BRAND_COLORS.primary }} className="mb-3" />
          <h4 className="font-bold text-xl mb-2 text-gray-800">
            The Secret Recipe
          </h4>
          <p className="text-gray-600 text-sm">
            We’re powered by <b>React</b> and styled with <b>Tailwind CSS</b>,
            delivering smooth, responsive, and delightful quiz experiences.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white p-6 rounded-lg shadow-md border-t-4 transition-transform duration-300 hover:scale-105"
          style={{ borderColor: BRAND_COLORS.secondary }}
        >
          <Target size={32} style={{ color: BRAND_COLORS.secondary }} className="mb-3" />
          <h4 className="font-bold text-xl mb-2 text-gray-800">
            Our Grand Mission
          </h4>
          <p className="text-gray-600 text-sm">
            To make learning addictive—in a good way—through instant feedback,
            streaks, and interactive design.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white p-6 rounded-lg shadow-md border-t-4 transition-transform duration-300 hover:scale-105"
          style={{ borderColor: BRAND_COLORS.primary }}
        >
          <Zap size={32} style={{ color: BRAND_COLORS.primary }} className="mb-3" />
          <h4 className="font-bold text-xl mb-2 text-gray-800">
            Accessibility Ninja
          </h4>
          <p className="text-gray-600 text-sm">
            Built with keyboard navigation and accessibility in mind so everyone
            can enjoy quiz glory.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;

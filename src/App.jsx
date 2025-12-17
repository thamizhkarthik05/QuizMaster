// App.jsx


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">

        {/* Header - constant */}
        <Header />

        {/* Page Content */}
        <main className="grow flex justify-center bg-[#F9FAFB] px-2 sm:px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer - constant */}
        <div className="h-0.5 bg-[#26ECB4]" />


      <footer className="py-4 bg-[#FFFFFF] border-t border-gray-200">
        <div className="container mx-auto text-center text-sm sm:text-base text-[#374151] font-merriweather">
          Copyright © 2025 Thamizh Kaarthik
        </div>
      </footer>
      </div>
    </Router>
  );
};

export default App;

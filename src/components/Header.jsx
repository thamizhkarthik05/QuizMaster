// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        font-semibold
        text-base
        lg:text-lg
        px-3
        py-2
        rounded-lg
        transition
        duration-150
        ${isActive ? 'text-[#EC265F]' : 'text-[#1F2937]'}
        hover:text-[#EC265F]
        `
      }
    >
      {children}
    </NavLink>
  );
};
// ---------------------------------------------------

const Header = () => {
  const headerBgColor = '#FFFFFF';
  const borderColor = '#EC265F';
  const logoColor = '#EC265F'; 

  return (
    <header 
      // Header Background: #FFFFFF
      // Header Bottom Border: #EC265F
      className="shadow-sm border-b-2" 
      style={{ 
        backgroundColor: headerBgColor, 
        borderColor: borderColor 
      }}
    >
      <div className="container mx-auto px-4 py-1.5">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          
          {/* Logo and Title Section */}
          <div className="flex items-center gap-3 shrink-0 justify-center sm:justify-start">
              <div className="w-15 h-15 rounded-lg flex items-center justify-center text-2xl">
                      <img
                          src="/Logo.png"
                          alt="Logo"
                          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                </div>
            {/* Applying Logo/Active Nav Item color (#EC265F) to the title */}
            <h1 className="text-lg sm:text-xl md:text-2xl font-pacifico" style={{ color: logoColor }}>
              QuizMaster
            </h1>
          </div>
          
          {/* Navigation Bar */}
          <nav className="flex justify-center sm:justify-end gap-2 sm:gap-4 w-full overflow-x-auto no-scrollbar py-1
              ">
            {/* All links now use the same, non-conditional NavLink component */}
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/leaderboard">Leaderboard</CustomNavLink>
            <CustomNavLink to="/about">About</CustomNavLink>
          </nav>

        </div>
        
      </div>
    </header>
  );
};

export default Header;
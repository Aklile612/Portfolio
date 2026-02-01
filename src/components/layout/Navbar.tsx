'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Change background color when toggle is clicked
    const bgColor = isDarkMode ? '#253137' : '#ffffff';
    const textColor = isDarkMode ? '#ffffff' : '#1a1a1a';
    
    // Set on document root and body
    document.documentElement.style.backgroundColor = bgColor;
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    
    // Update all sections - use !important via setProperty
    const allElements = document.querySelectorAll('section, div');
    allElements.forEach((el) => {
      const element = el as HTMLElement;
      const computedBg = window.getComputedStyle(element).backgroundColor;
      // Only change elements that have the dark background
      // Check for exact class match to avoid matching bg-[#253137]/50 which should remain transparent
      const hasDarkClass = element.classList.contains('bg-[#253137]');
      
      if (computedBg === 'rgb(37, 49, 55)' || hasDarkClass) {
        element.style.setProperty('background-color', bgColor, 'important');
      }
    });
    
    // Update text colors for light mode
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, li');
    textElements.forEach((el) => {
      const element = el as HTMLElement;
      const currentColor = window.getComputedStyle(element).color;
      // Change white text to dark in light mode, and back to white in dark mode
      if (!isDarkMode && (currentColor === 'rgb(255, 255, 255)' || element.className.includes('text-white'))) {
        element.style.setProperty('color', '#1a1a1a', 'important');
      } else if (isDarkMode && element.style.color === 'rgb(26, 26, 26)') {
        element.style.removeProperty('color');
      }
    });
  }, [isDarkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - A */}
        <Link href="#home" className="flex items-center justify-center w-12 h-12 border border-gray-600 rounded-lg hover:border-emerald-400 transition-colors">
          <span className="text-2xl font-bold text-white">A</span>
        </Link>

        {/* Theme Toggle */}
        <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-3 py-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-10 h-5 rounded-full relative transition-colors ${isDarkMode ? 'bg-gray-600' : 'bg-emerald-400'}`}
          >
            <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${isDarkMode ? 'left-0.5' : 'left-5'}`}></span>
          </button>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

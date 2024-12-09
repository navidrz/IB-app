import React from 'react';

interface HeaderProps {
  onToggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleDrawer }) => {
  return (
    <header className="w-full bg-white shadow flex items-center justify-between px-4 py-3">
      <div className="flex items-center space-x-2">
        <img src="/assets/icons/icon-192.png" alt="App Logo" className="w-8 h-8"/>
        <span className="text-xl font-bold text-gray-800">My Market App</span>
      </div>
      <button 
        onClick={onToggleDrawer} 
        className="focus:outline-none sm:hidden"
        aria-label="Open Menu"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav className="hidden sm:flex space-x-4">
        <a href="/" className="text-gray-600 hover:text-gray-900">Signals</a>
      </nav>
    </header>
  );
};

export default Header;

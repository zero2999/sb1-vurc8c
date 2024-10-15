import React from 'react';
import { Home, TrendingUp, PieChart, Bell, User } from 'lucide-react';

const MobileMenu = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 md:hidden">
      <ul className="flex justify-around py-2">
        <li>
          <a href="#" className="flex flex-col items-center text-blue-500">
            <Home className="w-6 h-6" />
            <span className="text-xs">Casa</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center text-gray-400">
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">Estrategia</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center text-gray-400">
            <PieChart className="w-6 h-6" />
            <span className="text-xs">Círculo</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center text-gray-400">
            <Bell className="w-6 h-6" />
            <span className="text-xs">Noticias</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">Mío</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
import React from 'react';
import { Shield, Bell, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="Logo" className="w-8 h-8" />
        <span className="text-xl font-bold">Casa</span>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="hover:text-yellow-500">Mercados</a>
        <a href="#" className="hover:text-yellow-500">Comercio</a>
        <a href="#" className="hover:text-yellow-500">Futuros</a>
        <a href="#" className="hover:text-yellow-500">Más</a>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="w-6 h-6 hidden md:block" />
        <Shield className="w-6 h-6" />
        <Bell className="w-6 h-6" />
        <button className="hidden md:block bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">Iniciar sesión</button>
      </div>
    </header>
  );
};

export default Header;
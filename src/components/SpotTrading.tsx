import React from 'react';
import { Search } from 'lucide-react';

const SpotTrading = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 my-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button className="text-yellow-500 font-bold">Spot</button>
          <button className="text-gray-400">Futuros</button>
        </div>
        <button className="bg-gray-700 p-2 rounded-full">
          <Search className="w-5 h-5" />
        </button>
      </div>
      <div className="flex space-x-2 mb-4 overflow-x-auto md:flex-wrap">
        <button className="bg-gray-700 px-3 py-1 rounded-full text-sm whitespace-nowrap">USDT</button>
        <button className="text-gray-400 px-3 py-1 text-sm whitespace-nowrap">BTC</button>
        <button className="text-gray-400 px-3 py-1 text-sm whitespace-nowrap">ETH</button>
        <button className="text-gray-400 px-3 py-1 text-sm whitespace-nowrap">USDC</button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="text-left">Divisa</th>
            <th className="text-right">Último precio</th>
            <th className="text-right">Cambio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">1INCH/USDT</td>
            <td className="text-right">0.3115</td>
            <td className="text-right text-green-500">+2.77%</td>
          </tr>
          <tr>
            <td className="py-2">AAVE/USDT</td>
            <td className="text-right">170.10</td>
            <td className="text-right text-green-500">+2.89%</td>
          </tr>
          <tr className="md:hidden">
            <td className="py-2">BNB/USDT</td>
            <td className="text-right">310.50</td>
            <td className="text-right text-red-500">-1.23%</td>
          </tr>
          <tr className="md:hidden">
            <td className="py-2">ETH/USDT</td>
            <td className="text-right">1,850.75</td>
            <td className="text-right text-green-500">+0.95%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpotTrading;
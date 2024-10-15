import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import ScrollingText from './components/ScrollingText';
import IconGrid from './components/IconGrid';
import SpotTrading from './components/SpotTrading';
import MobileMenu from './components/MobileMenu';
import Chart from './components/Chart';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow px-4 pb-16 md:pb-0 md:flex md:space-x-4">
        <div className="md:w-2/3">
          <Carousel />
          <ScrollingText />
          <div className="md:flex md:space-x-4">
            <div className="md:w-1/2">
              <IconGrid />
            </div>
            <div className="md:w-1/2">
              <Chart />
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <SpotTrading />
        </div>
      </main>
      <MobileMenu />
    </div>
  );
}

export default App;
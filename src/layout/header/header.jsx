import React from 'react';
import { SearchIcon } from '../../assets/icons/searchIcon';
import { CardIcon } from '../../assets/icons/card.icon';
import LogoSvg from '../../assets/logo.svg';
import { Navbar } from './navbar';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-4">
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between gap-8">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={LogoSvg} alt="Logo" className="w-40 h-40 object-contain" />
        </div>

        <Navbar />

        <div className="flex gap-4">
          <div className="flex bg-gray-100 rounded-4xl relative">
            <input className="pl-4 pr-16 rounded-4xl w-[370px]" type="text" />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full cursor-pointer">
              <SearchIcon />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-12 h-12 bg-[#274C5B] rounded-full flex items-center justify-center hover:bg-[#1a3540] transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg">
              <CardIcon className="w-5 h-5 text-white" />
            </button>
            <span className="text-[#274C5B] font-semibold text-base whitespace-nowrap">
              Card(0)
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

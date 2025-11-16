import React from 'react';
import { Facebook } from '../../../../assets/icons/fasebook.icon'; 
import { Insta } from '../../../../assets/icons/instagram.icon';
import { Twitter } from '../../../../assets/icons/qushcha.icon'; 

export const TeamCard = ({ expert }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      <div className="relative h-[480px] overflow-hidden"> 
        <img
          src={expert.img}
          alt={expert.name}
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="text-center pt-8 pb-10">
        <h3 className="text-2xl font-bold text-[#274C5B] mb-1">
          {expert.name}
        </h3>
        <p className="font-serif italic text-[#7EB693] mb-4">
          {expert.role}
        </p>

        <div className="flex justify-center space-x-3">
          
          <a href={expert.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-1 hover:opacity-75 transition-opacity duration-200">
            <Facebook />
          </a>
          <a href={expert.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-1 hover:opacity-75 transition-opacity duration-200">
            <Insta />
          </a>
          <a href={expert.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-1 hover:opacity-75 transition-opacity duration-200">
            <Twitter />
          </a>

        </div>
      </div>
    </div>
  );
};
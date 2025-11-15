// src/sections/OurTeamSection/OurTeamSection.jsx
import React from 'react';
import { TeamExperts } from '../../../data/team-experts';
import { TeamCard } from './Card/TeamCard';

export const OurTeamSection = () => {
  return (
    <section className="w-full py-16 md:py-32 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Sarlavha Bloki */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-serif italic text-[#7EB693] text-xl mb-2">
            Team
          </p>
          <h2 className="text-5xl font-extrabold text-[#274C5B] mb-6">
            Our Organic Experts
          </h2>
          <p className="text-[#525C60]">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>

        {/* Ekspertlar Kartochkalari Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TeamExperts.map((expert) => (
            <TeamCard key={expert.id} expert={expert} />
          ))}
        </div>
        
      </div>
    </section>
  );
};
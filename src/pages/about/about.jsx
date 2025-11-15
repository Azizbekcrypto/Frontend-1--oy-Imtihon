import React from 'react';
import { AboutOfferSection } from './components/AboutOfferSection';
import { AboutHero } from './components/AboutHero';
import { OurTeamSection } from './components/OurTeamSection';
import { AboutContent } from './components/AboutContent';
import AboutChooseUs from './components/AboutChooseUs';

export const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutContent />
      <AboutChooseUs />
      <OurTeamSection />
      <AboutOfferSection />
    </div>
  );
};

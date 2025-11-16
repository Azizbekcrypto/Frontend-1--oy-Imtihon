import React from 'react';
import { HomeHero } from './components/HomeHero';
import { HomeOurProducts } from './components/HomeOurProducts';
import { HomePromoBanners } from './components/HomePromoBanners';
import { AboutSection } from './components/AboutSection';
import { HomeTestimonials } from './components/HomeTestimonials';
import { HomeOfferProducts } from './components/HomeOfferProducts';
import { HomeAboutUs } from './components/HomeAboutUs';
import { HomeCategories } from './components/HomeCategories';
import { HomeNews } from './components/HomeNews';


export const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomePromoBanners/>
      <AboutSection/>
      <HomeOurProducts />
      <HomeTestimonials />
      <HomeOfferProducts />
      <HomeAboutUs />
      <HomeCategories />
      <HomeNews/>
    </div>  
  );
}
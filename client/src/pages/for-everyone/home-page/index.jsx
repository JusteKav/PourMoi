import React from 'react';
import Hero from './home-page-hero';
import FreeOffersSection from './home-page-free-offers-section';
import HomePageCardsSection from './home-page-cards-section';
import HomePageCarousel1 from './home-page-carousel';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomePageCardsSection />
      <HomePageCarousel1 />
      <FreeOffersSection />
    </>
  );
};
export default HomePage;

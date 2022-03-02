import React from 'react';
import Hero from './home-page-hero';
import { Box } from '@mui/material';
import FreeOffersSection from './home-page-free-offers-section';
import HomePageCardsSection from './home-page-cards-section';
import HomePageCarousel1 from './home-page-carousel';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomePageCarousel1 />
      <Box sx={{ display: { xs: 'none', md: 'block' }, height: '64px', backgroundColor: '#faf8f8' }}></Box>
      <FreeOffersSection />
      <HomePageCardsSection />
    </>
  );
};
export default HomePage;

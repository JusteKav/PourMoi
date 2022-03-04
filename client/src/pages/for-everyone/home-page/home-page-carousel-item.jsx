import React from 'react';
import { Box } from '@material-ui/core';

const CarouselItem = ({ images }) => {
  return (
    <Box sx={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', px: { xs: 2, lg: 0 } }}>
      <Box
        sx={{
          backgroundImage: `url(${images[0]})`,

          height: '100%',
          backgroundPosition: '50% 70%',
          backgroundSize: 'cover',
          width: { xs: '100%', md: '49.75%' },
          display: 'inline-block',
        }}
      ></Box>
      <Box
        sx={{ backgroundColor: '#faf8f8', height: '100%', width: '0.5%', display: { xs: 'none', md: 'inline-block' } }}
      />
      <Box
        sx={{
          display: { xs: 'none', md: 'inline-block' },
          backgroundImage: `url(${images[1]})`,
          height: '100%',
          backgroundPosition: '50% 90%',
          backgroundSize: 'cover',
          width: '49.75%',
        }}
      ></Box>
    </Box>
  );
};

export default CarouselItem;

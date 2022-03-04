import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@material-ui/core';

const items = [
  {
    images: [
      // 'https://cdn.shopify.com/s/files/1/2803/4000/products/5-AR05-010-U_700x.png?v=1639646897',
      // 'https://cdn.shopify.com/s/files/1/2803/4000/products/4-AR01-468-U_0_f666fac3-22a5-4378-bd35-c9b465d398a8_700x.jpg?v=1639652445',
      // 'https://cdn.shopify.com/s/files/1/2803/4000/products/5-AR01-468-U_5_8b3f4236-9ef0-4a95-a235-753bfc75a643_700x.jpg?v=1639652445',
      `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399729638-226804787.jpg`,
      `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399729641-924519966.jpg`,
    ],
  },
  {
    images: [
      // 'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_700x.png?v=1641377293',
      // 'https://cdn.shopify.com/s/files/1/2803/4000/products/4-AN01-378-U_e8f33f10-fbd5-433c-b7a5-0d44e7b8d328_700x.jpg?v=1631098024',
      // 'https://cdn.shopify.com/s/files/1/2803/4000/products/7-AN01-378-U_1_d50071dc-de9d-4fe1-8347-5934e309b31d_700x.jpg?v=1639656291',
      `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399729655-11153403.jpg`,
      `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399729650-641549756.jpg`,
    ],
  },
];

const Item = ({ images }) => {
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

const HomePageCarousel = () => {
  return (
    <Box sx={{ m: 'auto' }}>
      <Carousel navButtonsAlwaysVisible={false} stopAutoPlayOnHover={false} indicators={false}>
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default HomePageCarousel;

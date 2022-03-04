import Carousel from 'react-material-ui-carousel';
import { Box } from '@material-ui/core';
import CarouselItem from './home-page-carousel-item';

const items = [
  {
    images: [
      `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399729638-226804787.jpg`,
      `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399729641-924519966.jpg`,
    ],
  },
  {
    images: [
      `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399729655-11153403.jpg`,
      `${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399729650-641549756.jpg`,
    ],
  },
];

const HomePageCarousel = () => {
  return (
    <Box sx={{ m: 'auto' }}>
      <Carousel navButtonsAlwaysVisible={false} stopAutoPlayOnHover={false} indicators={false}>
        {items.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default HomePageCarousel;

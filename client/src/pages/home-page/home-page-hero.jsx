import MainGif from '../../images/home-page-gif.gif';
import { Button, Grid } from '@mui/material';
import BackgroundImageContainer from '../../components/partials/containers/background-image-container';

const Hero = () => {
  return (
    <Grid container>
      <Grid item md={8}>
        <BackgroundImageContainer
          sx={{ height: { xs: '40vh', md: '75vh' }, backgroundPosition: '50% 25%' }}
          image={`url(${MainGif})`}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <BackgroundImageContainer
          sx={{
            backgroundSize: { xs: 'cover', md: 'unset' },
            alignItems: { xs: 'end', md: 'center' },
            backgroundPosition: { xs: '0% 70%', md: 'center' },
            position: ' relative',
            py: 8,
          }}
          image={{
            xs: `url(https://cdn.shopify.com/s/files/1/2803/4000/t/193/assets/WE_ARE_001.jpg?v=4282297815789512859)`,
            md: `url('https://cdn.shopify.com/s/files/1/2803/4000/products/1-CO01-260-U_7_700x.jpg?v=1628731500')`,
          }}
        >
          <Button
            sx={{
              border: 1,
              borderRadius: 0,
              color: { xs: 'white', md: 'black' },
              fontSize: { xs: 12, md: 16 },
              px: { xs: 3, md: 5 },
              py: { xs: 2, md: 3 },
              position: { xs: 'relative', md: 'absolute' },
              left: { xs: 0, md: -105 },
              width: 200,
            }}
          >
            SHOP NOW
          </Button>
        </BackgroundImageContainer>
      </Grid>
    </Grid>
  );
};

export default Hero;

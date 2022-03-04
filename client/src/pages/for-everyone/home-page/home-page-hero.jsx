import { Button, Grid } from '@mui/material';
import BackgroundImageContainer from '../../../components/partials/containers/background-image-container';
import StyledLink from '../../../components/partials/styled-small-components/styled-link';

const Hero = () => {
  return (
    <Grid container sx={{ mb: { xs: 6, md: 8 } }}>
      <Grid item md={8}>
        <BackgroundImageContainer
          sx={{ height: { xs: '70vh', md: '75vh' }, backgroundPosition: '50% 35%' }}
          image={`url(${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399729646-132399674.jpg)`}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <BackgroundImageContainer
          sx={{
            backgroundSize: { xs: 'cover' },
            alignItems: { xs: 'end', md: 'center' },
            backgroundPosition: { xs: '0% 70%', md: 'center' },
            position: ' relative',
            py: 3,
          }}
          image={{
            xs: `url(${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399908450-838530903.jpg)`,
            md: `url(${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399192000-210642128.jpg)`,
          }}
        >
          <Button
            sx={{
              border: 1,
              borderRadius: 0,
              color: { xs: 'white', md: 'black' },
              fontSize: { xs: 12, md: 36 },
              px: { xs: 3, md: 2, lg: 3 },
              py: { xs: 2, md: 2, lg: 3 },
              position: { xs: 'relative', md: 'absolute' },
              mx: { xs: 2, md: 0 },
              left: { xs: 0, md: -107, lg: -147 },
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(250,248,248, 0.2)',
                color: '#ffffff',
              },
              width: { xs: '100%', md: '210px', lg: '282px' },
            }}
          >
            <StyledLink
              sx={{ fontSize: { xs: 24, md: 32, lg: 44 }, fontWeight: 300, color: '#f6f4f0' }}
              title="SHOP"
              link="/items"
            />
            <StyledLink
              sx={{
                fontSize: { xs: 24, md: 32, lg: 44 },
                color: { xs: '#f6f4f0', md: 'black' },
                fontWeight: 300,
                p: 1,
              }}
              title="NOW"
              link="/items"
            />
          </Button>
        </BackgroundImageContainer>
      </Grid>
    </Grid>
  );
};

export default Hero;

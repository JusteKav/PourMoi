import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SecurityIcon from '@mui/icons-material/Security';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Typography, Box, Grid } from '@mui/material';

const FreeOffersSection = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2} sx={{ maxWidth: 1200, py: 8 }}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              height: { xs: 160 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <DirectionsCarIcon fontWeight="fontWeightLight" sx={{ fontSize: 30 }} />
            <Typography sx={{ fontWeight: 500, paddingTop: 2, paddingBottom: 0.5 }}>FREE SHIPPING</Typography>
            <Typography>Free delivery for orders above 100€</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              height: { xs: 160 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SecurityIcon fontWeight="fontWeightLight" sx={{ fontSize: 30 }} />
            <Typography sx={{ fontWeight: 500, paddingTop: 2, paddingBottom: 0.5 }}>LONGTIME WARRANTY</Typography>
            <Typography>2 years warranty for stones & finishing.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              height: { xs: 160 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardGiftcardIcon fontWeight="fontWeightLight" sx={{ fontSize: 30 }} />
            <Typography sx={{ fontWeight: 500, paddingTop: 2, paddingBottom: 2 }}>BEAUTIFUL GIFT WRAPPING</Typography>
            <Typography>Free gift wrapping over 50€</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FreeOffersSection;

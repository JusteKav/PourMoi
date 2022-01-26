import { Grid, Typography, Button, Divider, Box, useTheme } from '@mui/material';
import AlignmentContainer from '../components/partials/containers/alignment-container';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Carousel from 'react-material-ui-carousel';

const freeOffersData = [
  { iconName: <HttpsOutlinedIcon />, text: '30 days for exchanges and returns' },
  { iconName: <DiamondOutlinedIcon />, text: 'Hand-finished jewelry with premium materials' },
  { iconName: <ChangeCircleOutlinedIcon />, text: '2 years warranty' },
];

const ItemPage = () => {
  const theme = useTheme();

  const itemData = [
    { name: 'MATERIAL: ', text: '925 Sterling Silver' },
    {
      name: 'STONES: ',
      text: 'Sapphire Blue Corundum Rhodolite zirconia Champagne zirconia Golden Yellow zirconia Pure White zirconia',
    },
    { name: 'WEIGHT: ', text: '6,2 g' },
  ];

  const items = [
    {
      image: 'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-307-U_2_700x.jpg?v=1639648192',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-307-U_0_700x.jpg?v=16396481924',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-307-U_5_700x.jpg?v=1639648192',
    },
  ];

  return (
    <AlignmentContainer sx={{ minHeight: theme.mixins.minNavbarAndFooterLayoutHeight.height, alignItems: 'start' }}>
      <Grid container>
        <Grid item xs={12} sx={{ pb: 4 }}>
          <Typography variant="regularTextXs">🠔 Back</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={7}>
          <Box>
            <Carousel navButtonsAlwaysVisible={false} indicators={false} topAutoPlayOnHover={true}>
              {items.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box
                    sx={{
                      backgroundImage: `url(${item.image})`,
                      height: { xs: '60vh', sm: 650 },
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      width: '100%',
                    }}
                  ></Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={5}
          sx={{ px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: { xs: 3, sm: '15%' },
              flexDirection: { xs: 'column', md: 'row' },
              pt: 2,
            }}
          >
            <Typography variant="boldTextM">TIGER GOLD EARRINGS</Typography>
            <Typography variant="boldTextM">€135,00</Typography>
          </Box>
          <Box>
            {itemData.map(({ name, text }) => {
              return (
                <Box sx={{ dispay: 'flex' }} key={name}>
                  <Typography variant="boldTextXs">{name}</Typography>
                  <Typography variant="regularTextXs">{text}</Typography>
                </Box>
              );
            })}

            <Button variant="outlined" sx={{ backgroundColor: 'black', width: '100%', borderRadius: 0, mt: 3 }}>
              ADD TO CART
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box>
            <Divider sx={{ mt: 3, mb: 1 }} />

            {freeOffersData.map(({ iconName, text }) => {
              return (
                <Box sx={{ display: 'flex', alignItems: 'center' }} key={text}>
                  {iconName}
                  <Typography sx={{ mx: 1 }} variant="regularTextXs">
                    {text}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </AlignmentContainer>
  );
};

export default ItemPage;

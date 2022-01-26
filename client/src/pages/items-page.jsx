import { Box, useTheme, Grid, Typography, Divider, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import AlignmentContainer from '../components/partials/containers/alignment-container';
import ItemCard from '../components/partials/cards/cards-item-card';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useState } from 'react';

const cards = [
  {
    id: '1',
    name: 'TIGER GOLD EARRINGS',
    material: '925 Sterling Silver',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_alt2_0e68aefa-86ec-4dbc-8bcd-45af8e40a26d_700x.png?v=1641377293',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_1_700x.jpg?v=1641377293',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_3_700x.jpg?v=1641377293',
    ],
    price: 135.0,
  },
  {
    id: '2',
    name: 'MUSKETEER GOLD EARRINGS',
    material: '925 Sterling Silver',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-384-U_6_700x.jpg?v=1628739856',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-384-U_3_700x.jpg?v=1628739856',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-384-U_2_700x.jpg?v=1639646365',
    ],
    price: 55.0,
  },
  {
    id: '3',
    name: 'PISTIL GOLD EARRINGS',
    material: '925 Sterling Silver',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-322-U_5_700x.jpg?v=1639646383',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-322-U_1_700x.jpg?v=1639646383',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-322-U_2_700x.jpg?v=1639646383',
    ],
    price: 125.0,
  },
  {
    id: '4',
    name: 'YELLOW GOLD BOLD MINI HOOPS',
    material: '100% Recycled 18k Solid Yellow Gold',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/1-AR05-010-U_alt2_700x.jpg?v=1628738617',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/2-AR05-010-U_2_700x.jpg?v=1639646897',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/2-AR05-010-U_3_700x.jpg?v=1639646897',
    ],
    price: 200.0,
  },
  {
    id: '5',
    name: 'TIGER GOLD EARRINGS',
    material: '925 Sterling Silver',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_alt2_0e68aefa-86ec-4dbc-8bcd-45af8e40a26d_700x.png?v=1641377293',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_1_700x.jpg?v=1641377293',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_3_700x.jpg?v=1641377293',
    ],
    price: 135.0,
  },
  {
    id: '6',
    name: 'MUSKETEER GOLD EARRINGS',
    material: '925 Sterling Silver',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-384-U_6_700x.jpg?v=1628739856',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-384-U_3_700x.jpg?v=1628739856',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-384-U_2_700x.jpg?v=1639646365',
    ],
    price: 55.0,
  },
  {
    id: '7',
    name: 'PISTIL GOLD EARRINGS',
    material: '925 Sterling Silver',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-322-U_5_700x.jpg?v=1639646383',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-322-U_1_700x.jpg?v=1639646383',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-322-U_2_700x.jpg?v=1639646383',
    ],
    price: 125.0,
  },
  {
    id: '8',
    name: 'YELLOW GOLD BOLD MINI HOOPS',
    material: '100% Recycled 18k Solid Yellow Gold',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/1-AR05-010-U_alt2_700x.jpg?v=1628738617',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/2-AR05-010-U_2_700x.jpg?v=1639646897',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/2-AR05-010-U_3_700x.jpg?v=1639646897',
    ],
    price: 200.0,
  },

  {
    id: '9',
    name: 'TIGER GOLD EARRINGS',
    material: '925 Sterling Silver',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_alt2_0e68aefa-86ec-4dbc-8bcd-45af8e40a26d_700x.png?v=1641377293',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_1_700x.jpg?v=1641377293',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_3_700x.jpg?v=1641377293',
    ],
    price: 135.0,
  },
  {
    id: '10',
    name: 'MUSKETEER GOLD EARRINGS',
    material: '925 Sterling Silver',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-384-U_6_700x.jpg?v=1628739856',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-384-U_3_700x.jpg?v=1628739856',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-384-U_2_700x.jpg?v=1639646365',
    ],
    price: 55.0,
  },
  {
    id: '11',
    name: 'PISTIL GOLD EARRINGS',
    material: '925 Sterling Silver',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-322-U_5_700x.jpg?v=1639646383',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-322-U_1_700x.jpg?v=1639646383',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-322-U_2_700x.jpg?v=1639646383',
    ],
    price: 125.0,
  },
  {
    id: '12',
    name: 'YELLOW GOLD BOLD MINI HOOPS',
    material: '100% Recycled 18k Solid Yellow Gold',
    images: [
      'https://cdn.shopify.com/s/files/1/2803/4000/products/1-AR05-010-U_alt2_700x.jpg?v=1628738617',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/2-AR05-010-U_2_700x.jpg?v=1639646897',
      'https://cdn.shopify.com/s/files/1/2803/4000/products/2-AR05-010-U_3_700x.jpg?v=1639646897',
    ],
    price: 200.0,
  },
];

const materials = [
  {
    id: '1',
    title: '925 Sterling Silver',
  },
  {
    id: '2',
    title: '18K Gold Plating',
  },
  {
    id: '3',
    title: '18K Solid Yellow Gold',
  },
  {
    id: '4',
    title: '18K Solid White Gold',
  },
  {
    id: '5',
    title: 'Rhodlum Silver Plating',
  },
];

const colors = [
  {
    id: '1',
    title: 'Gold',
  },
  {
    id: '2',
    title: 'Silver',
  },
];

const ItemsPage = () => {
  const theme = useTheme();
  const [first, setfirst] = useState('none');

  return (
    <AlignmentContainer sx={{ pl: { xs: 2, sm: 0 }, py: 2, pr: 2 }}>
      <Grid
        container
        sx={{
          height: 45,
          width: '100vw',
          backgroundColor: 'white',
          position: 'fixed',
          bottom: 0,
          zIndex: 'tooltip',
          display: { xs: 'flex', sm: 'none' },
          borderTop: 1,
          borderColor: 'grey.300',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Grid item xs={5} sx={{ width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FilterAltIcon />
          <Typography sx={{ display: 'inline-block' }}>Lowest price</Typography>
        </Grid>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Grid item xs={5} sx={{ width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SortIcon />
          <Typography sx={{ display: 'inline-block' }}>Filter</Typography>
        </Grid>
      </Grid>
      <Box sx={{ pr: 2, display: { xs: 'none', sm: 'block' } }}>
        <Box sx={{ position: 'relative', width: 250 }}>
          <Box
            sx={{
              height: `calc(100vh - ${theme.mixins.navbar.height})`,
              width: 250,
              borderRight: 1,
              borderLeft: 1,
              borderColor: 'grey.300',
              position: 'fixed',
              top: theme.mixins.navbar.height,
              backgroundColor: 'white',
              px: 2,
            }}
          >
            <Box sx={{ height: 90, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="boldTextS">FIND WHAT SUITS YOU</Typography>
            </Box>
            <Divider />
            <Box sx={{ height: 70, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography>Sort by:</Typography>
              <SortIcon sx={{ mx: 1 }} />
              <Typography>Lowest price</Typography>
            </Box>
            <Divider />
            <Box sx={{ py: 4, pl: 3 }}>
              <Box>
                <Typography variant="boldTextXs">COLOR</Typography>
                <FormGroup sx={{ py: 1 }}>
                  {colors.map(({ id, title }) => {
                    return (
                      <FormControlLabel
                        sx={{ height: 25 }}
                        key={id}
                        control={<Checkbox color="secondary" />}
                        label={title}
                      />
                    );
                  })}
                </FormGroup>
              </Box>
              <Box sx={{ pt: 4 }}>
                <Typography variant="boldTextXs">COLOR</Typography>
                <FormGroup sx={{ py: 1 }}>
                  {materials.map(({ id, title }) => {
                    return (
                      <FormControlLabel
                        sx={{ height: 25 }}
                        key={id}
                        control={<Checkbox color="secondary" />}
                        label={title}
                      />
                    );
                  })}
                </FormGroup>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Grid container spacing={2} sx={{}}>
        {cards.map(({ id, name, material, images, price }) => {
          return (
            <Grid item xs={6} md={4} lg={3} key={id}>
              <ItemCard name={name} material={material} imageUrl={images[0]} price={price} />
            </Grid>
          );
        })}
      </Grid>
    </AlignmentContainer>
  );
};

export default ItemsPage;

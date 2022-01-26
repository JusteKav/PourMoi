import ItemCard from '../../components/partials/cards/cards-item-card';
import { Grid } from '@mui/material';
import AlignmentContainer from '../../components/partials/containers/alignment-container';

const homePageCardData = [
  {
    name: 'SIGNATURE LINK GOLD RING',
    imageUrl: 'https://cdn.shopify.com/s/files/1/2803/4000/products/PACK_KAYAGOLDEARRINGS_2_700x.jpg?v=1640342866',
    material: '18K Gold Plating',
    price: 45,
    styles: {},
  },
  {
    name: 'M6USKETEER GOLD EARRINGS',
    imageUrl: 'https://cdn.shopify.com/s/files/1/2803/4000/products/1-AR05-010-U_alt2_700x.jpg?v=1628738617',
    material: '925 Sterling Silver / 18K Gold Plating',
    price: 55,
    styles: {},
  },
  {
    name: 'LARGE SIGNATURE CHAIN GOLD NECKLACE',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-291-U_alt2_0e68aefa-86ec-4dbc-8bcd-45af8e40a26d_700x.png?v=1641377293',
    material: '925 Sterling Silver / 18K Gold Plating',
    price: 359,
    styles: { display: { xs: 'none', sm: 'inline-block' } },
  },
  {
    name: 'DIAMONDS AND YELLOW GOLD FROSTY HOOPS',
    imageUrl: 'https://cdn.shopify.com/s/files/1/2803/4000/products/AR01-322-U_5_700x.jpg?v=1639646383',
    material: 'Recycled 18k Solid Yellow Gold',
    price: 450,
    styles: { display: { xs: 'none', lg: 'inline-block' } },
  },
];

const HomePageCardsSection = () => {
  return (
    <AlignmentContainer color="#faf8f8" sx={{ py: 7 }}>
      <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {homePageCardData.map(({ name, imageUrl, material, price, styles }) => {
          return (
            <Grid item xs={6} sm={4} lg={3} sx={{ ...styles }} key={name}>
              <ItemCard name={name} imageUrl={imageUrl} material={material} price={price} />
            </Grid>
          );
        })}
      </Grid>
    </AlignmentContainer>
  );
};

export default HomePageCardsSection;

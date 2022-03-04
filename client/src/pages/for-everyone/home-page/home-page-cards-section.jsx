import ItemCard from '../../../components/partials/cards/cards-item-card';
import { Grid } from '@mui/material';
import AlignmentContainer from '../../../components/partials/containers/alignment-container';
import { JewelryContext } from '../../../contexts/contexts-jewelry-data';
import React, { useContext } from 'react';

const HomePageCardsSection = () => {
  const jewelryState = useContext(JewelryContext);
  const dataArr = jewelryState.data.slice(0, 4);

  return (
    <AlignmentContainer color="#faf8f8" sx={{ py: 8 }}>
      <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {dataArr.map((jewelry) => {
          return (
            <Grid item xs={6} md={3} key={jewelry.id}>
              <ItemCard jewelry={jewelry} />
            </Grid>
          );
        })}
      </Grid>
    </AlignmentContainer>
  );
};

export default HomePageCardsSection;

import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth';
import { Grid, Typography, Divider, useTheme, TextField, Box } from '@mui/material';
import AlignmentContainer from '../../../components/partials/containers/alignment-container';
import ItemCard from '../../../components/partials/cards/cards-item-card';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ItemsPageSidebar from './items-page-sidebar';
import FiltersModal from './items-page-filters-modal';
import AdminJewelryModal from './items-page-admin-jewelry-modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { JewelryContext } from '../../../contexts/contexts-jewelry-data';
import SearchIcon from '@mui/icons-material/Search';

const ItemsPage = () => {
  const jewelryState = useContext(JewelryContext);
  const theme = useTheme();
  const auth = useSelector(authSelector);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <AlignmentContainer
      sx={{
        pl: { xs: 2, sm: 0 },
        py: 2,
        pr: 2,
        minHeight: `calc(100vh - ${theme.mixins.footer.height}  - ${theme.mixins.navbar.height}) `,
        alignItems: 'start',
      }}
    >
      <ItemsPageSidebar />
      <Grid
        container
        sx={{
          height: 45,
          width: '100vw',
          backgroundColor: 'white',
          position: 'fixed',
          bottom: 0,
          zIndex: 'modal',
          display: { xs: 'flex', sm: 'none' },
          borderTop: 1,
          borderColor: 'grey.300',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Grid item xs={5} sx={{ width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SortIcon />
          <Typography sx={{ display: 'inline-block' }}>Lowest price</Typography>
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Grid item xs={5} sx={{ width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FiltersModal>
            <FilterAltIcon />
            <Typography sx={{ display: 'inline-block' }}>Filter</Typography>
          </FiltersModal>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {auth.user !== null ? (
          auth.user.role === 'ADMIN' ? (
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <AdminJewelryModal
                icon={<AddCircleIcon />}
                initialDataValues={{
                  title: '',
                  price: '',
                  weight: '',
                  color: '',
                  material: '',
                  type: '',
                  stones: [],
                  files: [],
                }}
                sx={{ display: 'block' }}
              />
              <Typography sx={{ mx: 1 }}> Add Jewelry</Typography>
            </Grid>
          ) : null
        ) : null}
        <Grid
          item
          xs={auth.user !== null && auth.user.role === 'ADMIN' ? 6 : 12}
          sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}
        >
          <SearchIcon sx={{ mr: 1 }} />
          <TextField onChange={(e) => handleChange(e)} size="small" placeholder="Search"></TextField>
        </Grid>
        {jewelryState.data
          .filter((el) => el.title.includes(value.toUpperCase()))
          .map((jewelry) => {
            return (
              <Grid item xs={6} md={4} lg={3} key={jewelry.id}>
                <ItemCard jewelry={jewelry} />
              </Grid>
            );
          })}
      </Grid>
    </AlignmentContainer>
  );
};

export default ItemsPage;

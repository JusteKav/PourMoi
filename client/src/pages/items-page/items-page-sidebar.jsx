import React from 'react';
import { Box, useTheme, Typography, Divider, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

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

const ItemsPageSidebar = () => {
  const theme = useTheme();
  return (
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
  );
};

export default ItemsPageSidebar;

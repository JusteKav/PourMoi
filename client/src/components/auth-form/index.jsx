import React from 'react';
import { Grid, useTheme, Typography, Box, CircularProgress, Button } from '@mui/material';
import StyledLink from '../partials/styled-small-components/styled-link';

import AlignmentContainer from '../../components/partials/containers/alignment-container';
import BackgroundImageContainer from '../../components/partials/containers/background-image-container';

const AuthForm = ({ children, title, linkTo, linkTitle, loading, onSubmit, isValid }) => {
  const theme = useTheme();
  return (
    <AlignmentContainer
      sx={{ minHeight: `calc(100vh - ${theme.mixins.footer.height}  - ${theme.mixins.navbar.height}) ` }}
    >
      <Grid spacing={3} container sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
        <Grid item sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <BackgroundImageContainer
            image={'url(https://cdn.shopify.com/s/files/1/2803/4000/products/CO01-342-U_3_700x.png?v=1640347861)'}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Grid container spacing={2}>
            <Box component="form" onSubmit={onSubmit}>
              <Typography variant="lightTextXl">{title}</Typography>
              {children}
              <Button sx={{ my: 2 }} variant="contained" fullWidth type="submit" disabled={!isValid}>
                {loading ? <CircularProgress color="inherit" /> : title}
              </Button>
              <StyledLink sx={{ fontWeight: 'normal' }} link={linkTo} title={linkTitle} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </AlignmentContainer>
  );
};

export default AuthForm;

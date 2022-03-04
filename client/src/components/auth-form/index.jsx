import React from 'react';
import { Grid, useTheme, Typography, Box, Button } from '@mui/material';
import StyledLink from '../partials/styled-small-components/styled-link';

import AlignmentContainer from '../../components/partials/containers/alignment-container';
import BackgroundImageContainer from '../../components/partials/containers/background-image-container';

const AuthForm = ({ children, title, linkTo, linkTitle, loading, onSubmit, isValid }) => {
  const theme = useTheme();
  return (
    <BackgroundImageContainer
      sx={{
        minHeight: `calc(100vh - ${theme.mixins.footer.height}  - ${theme.mixins.navbar.height}) `,
        width: '100%',
        backgroundPosition: '50% 60%',
      }}
      image={'url(https://cdn.shopify.com/s/files/1/2803/4000/t/223/assets/EDIT_APRIL_03.jpg?v=17043634736278866482)'}
    >
      <AlignmentContainer sx={{ p: 0 }}>
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: 'rgba(250,248,248, 0.85)',
            py: { xs: 3, sm: 7 },
            mx: 4,
            my: 2,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid item xs={12} sm={8} md={5} sx={{ px: 2, pb: 2 }}>
            <Box component="form" onSubmit={onSubmit} sx={{ p: 0 }}>
              <Typography variant="lightTextXl">{title}</Typography>
              {children}
              <Button sx={{ my: 2 }} variant="contained" fullWidth type="submit" disabled={!isValid}>
                {title}
              </Button>
              <StyledLink sx={{ fontWeight: 'normal' }} link={linkTo} title={linkTitle} />
            </Box>
          </Grid>
        </Grid>
      </AlignmentContainer>
    </BackgroundImageContainer>
  );
};

export default AuthForm;

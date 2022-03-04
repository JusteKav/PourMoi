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
      image={`url(${process.env.REACT_APP_SERVER_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/1646399192001-521189581.jpg)`}
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

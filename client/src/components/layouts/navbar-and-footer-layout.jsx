import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';

const NavbarLayout = () => {
  const theme = useTheme();
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          mt: theme.mixins.navbar.height,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default NavbarLayout;

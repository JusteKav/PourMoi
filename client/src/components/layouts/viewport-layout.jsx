import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const VieportLayout = () => (
  <Box>
    <Outlet />
  </Box>
);

export default VieportLayout;

import { createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material';

export const theme = createTheme({
  mixins: {
    navbar: {
      height: '90px',
    },
    footer: {
      height: '44px',
    },
    minNavbarAndFooterLayoutHeight: {
      height: `calc(100vh - 90px - 44px)`,
    },
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    boldTextXs: {
      fontSize: 14,
      fontWeight: 500,
    },
    regularTextXs: {
      fontSize: 14,
    },
    boldTextS: {
      fontSize: 16,
      fontWeight: 400,
    },
    boldTextM: {
      fontSize: 20,
      fontWeight: 400,
    },
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: 12,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    useNextVariants: true,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
});

export default theme;

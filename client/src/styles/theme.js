import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  mixins: {
    navbar: {
      height: '90px',
    },
    footer: {
      height: '44px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowY: 'scroll',
        },
      },
    },
    MuiButton: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            disableRipple: true,
          },
        },
      },
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#ebd6b0',
            color: '#ffffff',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // '& .MuiOutlinedInput-root': {
          //   '& fieldset': {
          //     borderColor: 'black',
          //   },
          //   '&:hover fieldset': {
          //     borderColor: 'white',
          //   },
          // },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
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
    lightTextXl: {
      fontSize: 40,
      fontWeight: 300,
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

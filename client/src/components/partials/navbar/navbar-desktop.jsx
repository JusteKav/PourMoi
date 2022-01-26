import { Typography, Box } from '@mui/material';

const Desktop = () => {
  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          sm: 'flex',
        },
        maxWidth: 550,
        justifyContent: 'space-between',
        margin: 'auto',
        alignItems: 'center',
        height: '90%',
      }}
    >
      <Typography sx={{ fontWeight: 500 }}>NEW ARRIVALS</Typography>
      <Typography sx={{ fontWeight: 500 }}>SHOP ALL</Typography>
      <Typography sx={{ fontWeight: 500 }}>RINGS</Typography>
      <Typography sx={{ fontWeight: 500 }}>EARRINGS</Typography>
      <Typography sx={{ fontWeight: 500 }}>BRACELETS</Typography>
      <Typography sx={{ fontWeight: 500 }}>NECKLACES</Typography>
    </Box>
  );
};

export default Desktop;

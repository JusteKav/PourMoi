import { Box, Typography, useTheme } from '@mui/material';

const ErrorPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: `calc(100vh - ${theme.mixins.footer.height}  - ${theme.mixins.navbar.height})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: 180, fontWeight: 400 }}>ERROR</Typography>;
    </Box>
  );
};

export default ErrorPage;

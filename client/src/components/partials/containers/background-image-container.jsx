import { Box } from '@mui/material';

const BackgroundImageContainer = ({ children, image, sx }) => {
  return (
    <Box
      sx={{
        backgroundImage: image,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundImageContainer;

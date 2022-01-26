import { Box } from '@mui/material';

const AlignmentContainer = ({ children, sx, color }) => {
  return (
    <Box sx={{ backgroundColor: color, height: '100%' }}>
      <Box
        sx={{
          maxWidth: 'lg',
          m: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          p: 2,
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AlignmentContainer;

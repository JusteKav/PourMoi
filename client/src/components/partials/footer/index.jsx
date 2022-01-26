import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlignmentContainer from '../containers/alignment-container';

const Footer = () => {
  return (
    <AlignmentContainer sx={{ py: 1, justifyContent: 'space-between', borderTop: 1, borderSize: 0.3 }}>
      <Box sx={{ width: 42, display: { xs: 'none', sm: 'block' } }} />
      <Typography sx={{ fontSize: 12 }}>© 2022 POURMOI ALL RIGHTS RESERVED</Typography>
      <Box>
        <InstagramIcon />
        <FacebookIcon />
      </Box>
    </AlignmentContainer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const StyledLink = ({ handleFunction, link, title, sx, rest }) => {
  return (
    <Typography
      variant="boldTextXs"
      sx={{
        color: 'inherit',
        textDecoration: 'inherit',
        textAlign: 'center',
        ...sx,
      }}
      to={link}
      component={Link}
      onClick={handleFunction}
    >
      {title}
    </Typography>
  );
};

export default StyledLink;

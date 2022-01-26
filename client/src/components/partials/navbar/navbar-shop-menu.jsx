import { Typography, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const links = [
  { id: '1', title: 'NEW ARRIVALS', link: '/' },
  { id: '2', title: 'SHOP ALL', link: '/items' },
  { id: '3', title: 'RINGS', link: '/items' },
  { id: '4', title: 'EARRINGS', link: '/items' },
  { id: '5', title: 'BRACELETS', link: '/items' },
  { id: '6', title: 'NECKLACES', link: '/items' },
];

const ShopMenu = () => {
  const theme = useTheme();
  const [menuDisplay, setMenuDisplay] = useState('none');

  const handleMenuDisplay = () => {
    if (menuDisplay === 'none') {
      setMenuDisplay('block');
    } else {
      setMenuDisplay('none');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        maxWidth: 550,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: { xs: 'end', sm: 'center' },
        height: '90%',
      }}
    >
      <Box
        sx={{
          display: {
            xs: menuDisplay,
            sm: 'flex',
          },
          width: '100%',
          backgroundColor: { xs: 'white', sm: 'transparent' },
          position: { xs: 'absolute', sm: 'relative' },
          left: 0,
          right: 0,
          top: { xs: theme.mixins.navbar.height, sm: 0 },
          borderBottom: { xs: 1, sm: 0 },
          borderTop: { xs: 1, sm: 0 },
        }}
      >
        {links.map(({ id, title, link }) => (
          <Typography
            onClick={handleMenuDisplay}
            variant="boldTextXs"
            sx={{
              display: { xs: 'block', sm: 'block' },
              color: 'inherit',
              textDecoration: 'inherit',
              p: 1,
              textAlign: 'center',
            }}
            component={Link}
            key={id}
            to={link}
          >
            {title}
          </Typography>
        ))}
      </Box>
      <MenuIcon onClick={handleMenuDisplay} sx={{ display: { xs: 'block', sm: 'none' } }} />
    </Box>
  );
};

export default ShopMenu;

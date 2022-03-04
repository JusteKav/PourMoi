import { Typography, Box, Modal } from '@mui/material';
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      {links.map(({ id, title, link }) => (
        <Typography
          onClick={handleClose}
          variant="boldTextXs"
          sx={{
            display: { xs: 'none', sm: 'block' },
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
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ invisible: true }}
        sx={{
          overflowY: 'scroll',
          '& :focus': {
            outline: 'none',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 90,
            right: 0,
            left: 0,

            bgcolor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #cbcbcb',
            p: 1,
          }}
        >
          {links.map(({ id, title, link }) => (
            <Typography
              onClick={handleClose}
              variant="boldTextXs"
              sx={{
                display: 'block',
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
      </Modal>
      <MenuIcon onClick={handleOpen} sx={{ display: { xs: 'block', sm: 'none' } }} />
    </Box>
  );
};

export default ShopMenu;

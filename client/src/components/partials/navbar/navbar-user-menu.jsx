import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth';
import { styled } from '@mui/system';
import AuthService from '../../../services/auth-service';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Typography, Box, Modal, Divider } from '@mui/material';
import StyledLink from '../styled-small-components/styled-link';

const StyledBox = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = () => {
    handleClose();
    AuthService.logout();
  };
  const auth = useSelector(authSelector);
  return (
    <>
      <Box sx={{ width: 72, height: 30, display: { xs: 'none', sm: 'block' } }}></Box>
      <Typography sx={{ fontSize: { xs: 36, sm: 48 } }}>PourMoi</Typography>
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <PermIdentityIcon onClick={handleOpen} sx={{ fontSize: { xs: 20, sm: 24 } }} />
        <Modal
          open={open}
          onClose={handleClose}
          BackdropProps={{ invisible: true }}
          sx={{
            '& :focus': {
              outline: 'none',
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 46,
              right: 32,
              height: 90,
              width: 150,
              bgcolor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #cbcbcb',
              p: 1,
            }}
          >
            {!auth.loggedIn ? (
              <StyledBox>
                <StyledLink handleFunction={handleClose} title="Log in" link="/login" />
                <Divider sx={{ width: '90%' }} />
                <StyledLink handleFunction={handleClose} title="Sign up" link="/register" />
              </StyledBox>
            ) : auth.user.role === 'USER' ? (
              <StyledBox>
                <StyledLink handleFunction={handleClose} title="Profile" link="/profile" />
                <Divider sx={{ width: '90%' }} />
                <StyledLink handleFunction={handleLogout} title="Log out" link="/" />
              </StyledBox>
            ) : (
              <StyledBox>
                <StyledLink handleFunction={handleClose} title="Edit collections" link="/data-edit" />
                <Divider sx={{ width: '90%' }} />
                <StyledLink handleFunction={handleLogout} title="Log out" link="/" />
              </StyledBox>
            )}
          </Box>
        </Modal>
        <FavoriteBorderOutlinedIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
        <ShoppingCartOutlinedIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </Box>
    </>
  );
};

export default UserMenu;

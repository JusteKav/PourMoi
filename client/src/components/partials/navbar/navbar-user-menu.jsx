import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Menu, MenuItem } from '@mui/material';
import { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { Typography, Box } from '@mui/material';

const UserMenu = () => {
  const authPopupStateProfile = usePopupState({ variant: 'popover', popupId: 'profileMenu' });
  return (
    <>
      <Box sx={{ width: 72, height: 30, display: { xs: 'none', sm: 'block' } }}></Box>
      <Typography sx={{ fontSize: { xs: 36, sm: 48 } }}>PourMoi</Typography>
      <Box sx={{ lineLenght: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
        <PermIdentityIcon sx={{ fontSize: { xs: 20, sm: 24 } }} {...bindTrigger(authPopupStateProfile)} />
        <Menu {...bindMenu(authPopupStateProfile)}>
          <MenuItem onClick={authPopupStateProfile.close}>Profile</MenuItem>
          <MenuItem onClick={authPopupStateProfile.close}>Logout</MenuItem>
        </Menu>
        <FavoriteBorderOutlinedIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
        <ShoppingCartOutlinedIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </Box>
    </>
  );
};

export default UserMenu;

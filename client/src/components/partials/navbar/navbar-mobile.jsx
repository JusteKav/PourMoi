import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Box } from '@mui/material';
import { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { usePopupState } from 'material-ui-popup-state/hooks';

const Mobile = () => {
  const authPopupStateMenu = usePopupState({ variant: 'popover', popupId: 'mainMenu' });

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        alignItems: 'center',
        height: '90%',
        justifyContent: 'end',
      }}
    >
      <MenuIcon
        sx={{
          fontSize: 24,
          color: 'black',
          display: 'block',
        }}
        {...bindTrigger(authPopupStateMenu)}
      />
      <Menu {...bindMenu(authPopupStateMenu)}>
        <MenuItem onClick={authPopupStateMenu.close}>New arrivals</MenuItem>
        <MenuItem onClick={authPopupStateMenu.close}>Shop all</MenuItem>
        <MenuItem onClick={authPopupStateMenu.close}>Rings</MenuItem>
        <MenuItem onClick={authPopupStateMenu.close}>Earrings</MenuItem>
        <MenuItem onClick={authPopupStateMenu.close}>Bracelets</MenuItem>
        <MenuItem onClick={authPopupStateMenu.close}>Necklaces</MenuItem>
      </Menu>
    </Box>
  );
};

export default Mobile;

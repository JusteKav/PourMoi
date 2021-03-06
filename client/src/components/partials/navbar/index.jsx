import { AppBar, Grid, Divider } from '@mui/material';
import ShopMenu from './navbar-shop-menu';
import UserMenu from './navbar-user-menu';

const Navbar = () => {
  return (
    <AppBar sx={{ height: 90, background: 'white', paddingLeft: 3, paddingRight: 3 }}>
      <Grid container sx={{ maxWidth: 1200, display: 'flex', margin: 'auto', height: '100%' }}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '50%',
          }}
        >
          <UserMenu />
        </Grid>
        <Grid item xs={12} sx={{ height: '50%' }}>
          <Divider variant="fullWidth" color="black" />
          <ShopMenu />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;

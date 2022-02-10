// layouts
import NavbarAndFooterLayout from '../components/layouts/navbar-and-footer-layout';
import ViewportLayout from '../components/layouts/viewport-layout';
// no-auth
import HomePage from '../pages/for-everyone/home-page';
import ItemsPage from '../pages/for-everyone/items-page';
import ItemPage from '../pages/for-everyone/item-page';
import ErrorPage from '../pages/for-everyone/error-page';
// public-only
import LoginPage from '../pages/public-only/login-page';
import RegisterPage from '../pages/public-only/register-page';
// user
import ProfilePage from '../pages/authenticated/user/profile-page';
import MemorizedItemsPage from '../pages/authenticated/user/memorized-items-page';
import OrderPage from '../pages/authenticated/user/order-page';
// admin

const exportedObject = {
  HomePage,
  ItemsPage,
  ItemPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  MemorizedItemsPage,
  OrderPage,
  ErrorPage,
  NavbarAndFooterLayout,
  ViewportLayout,
};

export default exportedObject;

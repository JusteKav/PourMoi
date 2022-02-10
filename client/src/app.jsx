// from libraries and etc.
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
// from folders
import theme from './styles/theme';
import store from './store';
import PageRouter from './routing/page-router';
// import NavbarAndFooterLayout from './components/layouts/navbar-and-footer-layout';
// import ViewportLayout from './components/layouts/viewport-layout';
// import ItemPage from './pages/item-page';
// import HomePage from './pages/home-page/index';
// import ItemsPage from './pages/items-page/';
// import OrderPage from './pages/order-page';
// import ProfilePage from './pages/profile-page';
// import LoginPage from './pages/login-page';
// import RegisterPage from './pages/register-page';
// import MemorizedItemsPage from './pages/memorized-items-page';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageRouter />
      {/* <Router>
        {checked && (
          <Routes>
            <Route path="/" element={<NavbarAndFooterLayout />}>
              <Route index element={<HomePage />} />
              <Route path="item" element={<ItemPage />} />
              <Route path="/" element={<ViewportLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
              </Route>
              <Route path="items" element={<ItemsPage />} />
              <Route path="memorized-items" element={<MemorizedItemsPage />} />
              <Route path="order" element={<OrderPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        )}
      </Router> */}
    </ThemeProvider>
  </ReduxProvider>
);

export default App;

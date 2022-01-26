import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarAndFooterLayout from './components/layouts/navbar-and-footer-layout';
import ViewportLayout from './components/layouts/viewport-layout';
import ItemPage from './pages/item-page';
import HomePage from './pages/home-page/index';
import ItemsPage from './pages/items-page/';
import OrderPage from './pages/order-page';
import ProfilePage from './pages/profile-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import MemorizedItemsPage from './pages/memorized-items-page';
// import ScrollToTop from './components/partials/helpers/scroll-to-top-helper';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* <ScrollToTop /> */}
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
      </Router>
    </ThemeProvider>
  );
};

export default App;

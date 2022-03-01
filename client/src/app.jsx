// from libraries and etc.
import CssBaseline from '@mui/material/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import store from './store';
import PageRouter from './routing/page-router';
import { JewelryContext, useProducts } from './contexts/contexts-jewelry-data';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <JewelryContext.Provider value={useProducts()}>
          <PageRouter />
        </JewelryContext.Provider>
      </ThemeProvider>
    </ReduxProvider>
  );
};
export default App;

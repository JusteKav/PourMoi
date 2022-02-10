import { PUBLIC_ONLY, USER } from './auth-types';

const routeStructure = [
  {
    path: '/',
    pageName: 'NavbarAndFooterLayout',
    childRoutes: [
      { index: true, pageName: 'HomePage' },
      { path: 'item/:id', pageName: 'ItemPage' },
      { path: 'items', pageName: 'ItemsPage' },
      { path: 'memorized-items', pageName: 'MemorizedItemsPage', auth: USER },
      { path: 'order', pageName: 'OrderPage', auth: USER },
      { path: 'profile', pageName: 'ProfilePage', auth: USER },
      { path: '*', pageName: 'ErrorPage' },
      {
        path: '/',
        pageName: 'ViewportLayout',
        childRoutes: [
          { path: 'login', pageName: 'LoginPage', auth: PUBLIC_ONLY },
          { path: 'register', pageName: 'RegisterPage', auth: PUBLIC_ONLY },
        ],
      },
    ],
  },
];

export default routeStructure;

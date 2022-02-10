import React from 'react';
import { PUBLIC_ONLY, USER, ADMIN } from '../auth-types';

import PublicOnlyProtector from './public-only-protector';
import UserProtector from './user-protector';
import AdminProtector from './admin-protector';

const protectPageEnum = {
  [PUBLIC_ONLY]: (Page) => (
    <PublicOnlyProtector>
      <Page />
    </PublicOnlyProtector>
  ),
  [USER]: (Page) => (
    <UserProtector>
      <Page />
    </UserProtector>
  ),
  [ADMIN]: (Page) => (
    <AdminProtector>
      <Page />
    </AdminProtector>
  ),
};

export default protectPageEnum;

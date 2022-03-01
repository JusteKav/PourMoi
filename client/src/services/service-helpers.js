import AuthService from './auth-service';

const validateToken = () => {
  const token = AuthService.getToken();
  if (!token) {
    throw new Error('Need authentication');
  }

  return token;
};

export default validateToken;

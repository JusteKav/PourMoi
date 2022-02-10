import React, { useState } from 'react';
import { TextField, Grid, Alert } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import routes from '../../routing/routes';
import { login } from '../../store/auth';
import AuthForm from '../../components/auth-form';
import AuthService from '../../services/auth-service';

const validationSchema = yup.object({
  email: yup.string().required('Is requireda').email('Is not valid email'),
  password: yup.string().required('Is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [urlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const onSubmit = async ({ email, password }) => {
    setError(null);
    try {
      const user = await AuthService.login({
        email,
        password,
      });

      const redirectTo = urlSearchParams.get('/');
      const loginSuccessAction = login({
        user,
        redirectTo,
      });
      dispatch(loginSuccessAction);
    } catch (err) {
      setError(err.message);
    }
  };

  const { handleChange, handleBlur, handleSubmit, values, errors, touched, dirty, isSubmitting, isValid } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // const inputData = [
  //   { name: 'email', label: 'Email', type: 'email' },
  //   { name: 'password', label: 'Password', type: 'password' },
  // ];
  console.log(errors.email);
  console.log(errors.password);
  console.log(errors);
  return (
    <AuthForm
      title="Log in"
      linkTo={routes.RegisterPage}
      linkTitle="Don't have an account? Sign up"
      loading={isSubmitting}
      isValid={isValid && dirty}
      onSubmit={handleSubmit}
    >
      <Alert severity="error" sx={{ my: 2, visibility: error ? 'visible' : 'hidden' }}>
        {error}
      </Alert>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={'' || (touched.email && errors.email)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            // autoComplete="email"
            // sx={{ pb: Boolean(errors.email) ? 0 : '20.07px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            variant="outlined"
            label="Password"
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
            // autoComplete="current-password"
            sx={{ pb: Boolean(errors.password) ? 0 : '20.07px' }}
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default LoginPage;

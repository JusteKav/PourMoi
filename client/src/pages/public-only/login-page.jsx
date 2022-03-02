import React, { useState } from 'react';
import { TextField, Grid, Alert, InputLabel, styled } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import routes from '../../routing/routes';
import { login } from '../../store/auth';
import AuthForm from '../../components/auth-form';
import AuthService from '../../services/auth-service';

const validationSchema = yup.object({
  email: yup.string().required('Email is required').email('Email is not valid'),
  password: yup.string().required('Password is required'),
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

  return (
    <AuthForm
      title="Log in"
      linkTo={routes.RegisterPage}
      linkTitle="Don't have an account? Sign up"
      loading={isSubmitting}
      isValid={isValid && dirty}
      onSubmit={handleSubmit}
    >
      <Alert severity="error" sx={{ visibility: error ? 'visible' : 'hidden', my: 1 }}>
        {error}
      </Alert>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {errors.email && touched.email ? (
            <InputLabel sx={{ color: 'red' }}>{errors.email}</InputLabel>
          ) : (
            <InputLabel>Email</InputLabel>
          )}
          <TextField
            name="email"
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          {errors.password && touched.password ? (
            <InputLabel sx={{ color: 'red' }}>{errors.password}</InputLabel>
          ) : (
            <InputLabel>Password</InputLabel>
          )}
          <TextField
            name="password"
            type="password"
            variant="outlined"
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default LoginPage;

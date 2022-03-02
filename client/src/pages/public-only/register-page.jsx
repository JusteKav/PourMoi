import React, { useState } from 'react';
import { TextField, Grid, InputAdornment, CircularProgress, InputLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { login } from '../../store/auth';
import AuthForm from '../../components/auth-form';
import AuthService from '../../services/auth-service';
import routes from '../../routing/routes';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 letters')
    .max(32, 'Name must be less than 24 letters'),
  surname: yup
    .string()
    .required('Surname is required')
    .min(2, 'Surname must be at least 2 letters')
    .max(32, 'Surname must be less than 24 letters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Email is not valid')
    .test('email-validator', 'Email already exists', (_, context) => {
      const { emailChecked, emailAvailable } = context.parent;
      if (!emailChecked) return true;

      return emailAvailable;
    }),
  password: yup
    .string()
    .required('Password is required')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Password must have at least one capital letter')
    .matches(/^.*\d+.*$/, 'Password must have at least one number')
    .min(8, 'Password must be at least 8 symbols')
    .max(32, 'Password must be less than 32 symbols'),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
});

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  subscribed: true,
  emailChecked: false,
  emailAvailable: false,
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);

  const onSubmit = async ({ email, name, surname, password, passwordConfirmation }) => {
    const user = await AuthService.register({
      email,
      name,
      surname,
      password,
      repeatPassword: passwordConfirmation,
    });
    dispatch(login({ user }));
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    isSubmitting,
    isValid,
    dirty,
    setFieldValue,
    setValues,
  } = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleEmailChange = (e) => {
    if (values.emailChecked) {
      setValues(
        {
          ...values,
          email: e.target.value,
          emailChecked: false,
          emailAvailable: false,
        },
        true
      );
    } else {
      handleChange(e);
    }
  };

  const handleEmailBlur = (e) => {
    handleBlur(e);
    if (!errors.email) {
      (async () => {
        try {
          setEmailCheckLoading(true);
          const emailAvailable = await AuthService.checkEmail(values.email);
          setFieldValue('emailAvailable', emailAvailable);
        } catch (error) {
          setFieldValue('emailAvailable', false);
        } finally {
          setFieldValue('emailChecked', true, true);
          setEmailCheckLoading(false);
        }
      })();
    }
  };

  let emailEndornment;
  if (emailCheckLoading) {
    emailEndornment = <CircularProgress size={24} />;
  } else if (!values.emailChecked) {
    emailEndornment = null;
  } else if (values.emailAvailable) {
    emailEndornment = <CheckCircleIcon color="success" />;
  } else {
    emailEndornment = <ErrorIcon color="error" />;
  }

  return (
    <AuthForm
      title="Sign up"
      linkTo={routes.LoginPage}
      linkTitle="Already have an account? Log in"
      onSubmit={handleSubmit}
      isValid={isValid && dirty}
      loading={isSubmitting}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ mt: 3 }}>
          {errors.name && touched.name ? (
            <InputLabel sx={{ color: 'red' }}>{errors.name}</InputLabel>
          ) : (
            <InputLabel>Name</InputLabel>
          )}
          <TextField
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && Boolean(errors.name)}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sx={{ mt: 3 }}>
          {errors.surname && touched.surname ? (
            <InputLabel sx={{ color: 'red' }}>{errors.surname}</InputLabel>
          ) : (
            <InputLabel>Surname</InputLabel>
          )}
          <TextField
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            error={touched.surname && Boolean(errors.surname)}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          {errors.email && touched.email ? (
            <InputLabel sx={{ color: 'red' }}>{errors.email}</InputLabel>
          ) : (
            <InputLabel>Email</InputLabel>
          )}
          <TextField
            name="email"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="end">{emailEndornment}</InputAdornment>,
            }}
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
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          {errors.passwordConfirmation && touched.passwordConfirmation ? (
            <InputLabel sx={{ color: 'red' }}>{errors.passwordConfirmation}</InputLabel>
          ) : (
            <InputLabel>Repeat password</InputLabel>
          )}
          <TextField
            name="passwordConfirmation"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirmation}
            error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
            disabled={isSubmitting}
            fullWidth
            variant="outlined"
            type="password"
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default RegisterPage;

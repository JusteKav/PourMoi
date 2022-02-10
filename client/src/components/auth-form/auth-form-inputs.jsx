import { TextField, Grid } from '@mui/material';

const AuthFormInputs = ({ children, data, errors, values, touched, handleChange, handleBlur }) => {
  return (
    <Grid container spacing={1}>
      {data.map(({ name, label, type }) => {
        const variable = name;
        console.log(variable);
        return (
          <Grid item xs={12} key={name}>
            <TextField
              sx={{ pb: errors.variable ? 0 : '17.06px' }}
              name={name}
              variant="outlined"
              label={label}
              type={type}
              value={values.variable}
              error={touched.variable && Boolean(errors.variable)}
              helperText={touched.variable && errors.variable}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
            />
          </Grid>
        );
      })}
      {children}
    </Grid>
  );
};

export default AuthFormInputs;

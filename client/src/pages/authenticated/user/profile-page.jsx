import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth';
import { useFormik } from 'formik';
import { TextField, Grid, Box, Button, InputLabel, useTheme, Typography } from '@mui/material';
import AlignmentContainer from '../../../components/partials/containers/alignment-container';
import API from '../../../services/api-service';

const ProfilePage = () => {
  const user = useSelector(authSelector).user;
  const theme = useTheme();

  const initialValues = {
    email: user.email,
    name: user.name,
    surname: user.surname,
  };

  const onSubmit = (values) => {
    const userValues = { ...user, ...values };
    API.updateUserData(userValues);
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <AlignmentContainer
      sx={{ minHeight: `calc(100vh - ${theme.mixins.footer.height}  - ${theme.mixins.navbar.height}) ` }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '600px' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="lightTextXl">Hello, {user.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={{ mt: 2 }}>Name</InputLabel>
            <TextField
              spellCheck="false"
              name="name"
              variant="outlined"
              value={values.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Surname</InputLabel>
            <TextField
              spellCheck="false"
              name="surname"
              variant="outlined"
              value={values.surname}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Email</InputLabel>
            <TextField name="email" variant="outlined" value={values.email} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </AlignmentContainer>
  );
};

export default ProfilePage;

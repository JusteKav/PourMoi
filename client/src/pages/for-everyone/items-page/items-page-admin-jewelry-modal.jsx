import React, { useRef, useContext } from 'react';
import { TextField, Grid, Box, Button, Dialog, Select, MenuItem, InputLabel, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import API from '../../../services/api-service';
import { JewelryContext } from '../../../contexts/contexts-jewelry-data';

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .min(2, 'Title must be at least 2 letters')
    .max(24, 'Title must be less than 24 letters'),
  price: yup.number().typeError('Price must be a number').required('Price is required'),
  weight: yup.number().typeError('Weight must be a number').required('Weight is required'),
  color: yup.string().required('Color is required'),
  material: yup.string().required('Material required'),
  type: yup.string().required('Type required'),
  // files: yup.string().required('A file is required'),
});

const AdminJewelryModal = ({ initialDataValues, icon, oldValues }) => {
  const initialValues = { ...initialDataValues };
  const jewelryState = useContext(JewelryContext);

  const fileUploadRef = useRef(null);

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    const files = Array.from(fileUploadRef.current.files);
    const addedJewelery = {
      ...values,
      files: files.length !== 0 ? files : oldValues.files,
    };
    if (initialDataValues.title === '') {
      await API.addJewelry(addedJewelery);
      resetForm({ values: '' });
    } else {
      await API.updateJewelry({
        ...oldValues,
        ...addedJewelery,
        files: files.length !== 0 ? [...files, ...oldValues.files] : oldValues.files,
      });
      resetForm({ files: [] });
    }
    jewelryState.getData();
    handleClose();
  };

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box onClick={handleClickOpen} sx={{ display: 'flex' }}>
        {icon}
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '600px', p: 4 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {errors.title && touched.title ? (
                <InputLabel sx={{ color: 'red' }}>{errors.title}</InputLabel>
              ) : (
                <InputLabel>Title</InputLabel>
              )}
              <TextField
                name="title"
                variant="outlined"
                value={values.title}
                onChange={handleChange}
                error={touched.title && Boolean(errors.title)}
                // helperText={touched.title && errors.title}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              {errors.price && touched.price ? (
                <InputLabel sx={{ color: 'red' }}>{errors.price}</InputLabel>
              ) : (
                <InputLabel>Price</InputLabel>
              )}
              <TextField
                name="price"
                variant="outlined"
                value={values.price}
                onChange={handleChange}
                error={touched.price && Boolean(errors.price)}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              {errors.weight && touched.weight ? (
                <InputLabel sx={{ color: 'red' }}>{errors.weight}</InputLabel>
              ) : (
                <InputLabel>Weight (g)</InputLabel>
              )}
              <TextField
                name="weight"
                variant="outlined"
                value={values.weight}
                onChange={handleChange}
                error={touched.weight && Boolean(errors.weight)}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              {errors.color && touched.color ? (
                <InputLabel sx={{ color: 'red' }}>{errors.color}</InputLabel>
              ) : (
                <InputLabel>Select a color</InputLabel>
              )}
              <Select
                variant="outlined"
                name="color"
                fullWidth
                value={values.color}
                onChange={handleChange}
                error={touched.color && Boolean(errors.color)}
                onBlur={handleBlur}
              >
                {jewelryState.colors.map(({ title, id }) => {
                  return (
                    <MenuItem key={id} value={id}>
                      {title}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={12}>
              {errors.material && touched.material ? (
                <InputLabel sx={{ color: 'red' }}>{errors.material}</InputLabel>
              ) : (
                <InputLabel>Select a material</InputLabel>
              )}
              <Select
                name="material"
                fullWidth
                variant="outlined"
                value={values.material}
                onChange={handleChange}
                error={touched.material && Boolean(errors.material)}
                onBlur={handleBlur}
              >
                {jewelryState.materials.map(({ title, id }) => {
                  return (
                    <MenuItem key={id} value={id}>
                      {title}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={12}>
              {errors.type && touched.type ? (
                <InputLabel sx={{ color: 'red' }}>{errors.type}</InputLabel>
              ) : (
                <InputLabel>Select a type</InputLabel>
              )}
              <Select
                variant="outlined"
                name="type"
                fullWidth
                value={values.type}
                onChange={handleChange}
                error={touched.type && Boolean(errors.type)}
                onBlur={handleBlur}
              >
                {jewelryState.types.map(({ title, id }) => {
                  return (
                    <MenuItem key={id} value={id}>
                      {title}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Select stones (not required)</InputLabel>
              <Select
                variant="outlined"
                multiple
                name="stones"
                value={values.stones}
                onChange={handleChange}
                fullWidth
                // renderValue={(selected) => selected.join(',')}
              >
                {jewelryState.stones.map((stone) => (
                  <MenuItem key={stone.id} value={stone.id}>
                    {/* <Checkbox color="secondary" />
                    <ListItemText primary={stone.title} /> */}
                    {stone.title}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              {initialDataValues.title === '' ? (
                <InputLabel>Upload images (3 are recommended)</InputLabel>
              ) : (
                <InputLabel>Change all images</InputLabel>
              )}
              <TextField
                name="files"
                type="file"
                inputProps={{ multiple: true }}
                variant="outlined"
                value={values.files}
                onChange={handleChange}
                fullWidth
                error={touched.files && Boolean(errors.files) && initialValues.title === ''}
                onBlur={handleBlur}
                inputRef={fileUploadRef}
              />
              {initialDataValues.title === '' ? null : (
                <Typography sx={{ fontSize: 11 }}>Do not upload photos to keep current photos.</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
};

export default AdminJewelryModal;

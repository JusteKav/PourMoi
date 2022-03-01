import React, { useRef, useContext } from 'react';
import { TextField, Grid, Box, Button, Dialog, Select, MenuItem, InputLabel } from '@mui/material';
import { useFormik } from 'formik';
import API from '../../../services/api-service';
import { JewelryContext } from '../../../contexts/contexts-jewelry-data';

const AdminJewelryModal = ({ initialDataValues, icon, oldValues }) => {
  const initialValues = { ...initialDataValues };
  const jewelryState = useContext(JewelryContext);

  const fileUploadRef = useRef(null);

  const onSubmit = async (values, { resetForm }) => {
    const files = Array.from(fileUploadRef.current.files);
    if (files.length === 0 && initialDataValues.title === '') {
      throw new Error('Need a file');
    }
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
    }
    jewelryState.getData();
    handleClose();
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    onSubmit,
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
              <InputLabel>Title</InputLabel>
              <TextField name="title" variant="outlined" value={values.title} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Price</InputLabel>
              <TextField name="price" variant="outlined" value={values.price} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Weight</InputLabel>
              <TextField name="weight" variant="outlined" value={values.weight} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Color</InputLabel>
              <Select name="color" fullWidth value={values.color} onChange={handleChange}>
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
              <InputLabel>Material</InputLabel>
              <Select name="material" fullWidth value={values.material} onChange={handleChange}>
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
              <InputLabel>Type</InputLabel>
              <Select name="type" fullWidth value={values.type} onChange={handleChange}>
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
              <InputLabel>Stones</InputLabel>
              <Select
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
              <InputLabel>Upload photo</InputLabel>
              <TextField
                name="files"
                type="file"
                inputProps={{ multiple: true }}
                variant="outlined"
                value={values.files}
                onChange={handleChange}
                fullWidth
                // accept="image/*"
                inputRef={fileUploadRef}
              />
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

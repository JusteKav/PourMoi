import React, { useState, useContext } from 'react';
import { TextField, Grid, Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import API from '../../../../services/api-service';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
import { JewelryContext } from '../../../../contexts/contexts-jewelry-data';
import { checkTitle } from './data-edit-page-helpers';

const ColorsEdit = () => {
  const [addColorDisplay, setAddColorDisplay] = useState('block');
  const [colorData, setColorData] = useState('');
  const [changeColorDisplay, setChangeColorDisplay] = useState('none');
  const { colors, getData, data } = useContext(JewelryContext);
  let initialValues = { title: '' };

  const handleDisplay = () => {
    if (changeColorDisplay === 'none') {
      setChangeColorDisplay('block');
      setAddColorDisplay('none');
    } else {
      setChangeColorDisplay('none');
      setAddColorDisplay('block');
    }
  };

  const validationSchema = yup.object({
    title: yup.string().test('is-allowed-HsCode', 'This color already exists', (val) => checkTitle(val, colors)),
  });

  const onSubmit = (values, { resetForm }) => {
    if (values.title.length !== 0) {
      if (addColorDisplay === 'block') {
        API.addColor(values);
        getData();
        resetForm({ values: '' });
      } else {
        const updatedValues = { ...colorData, ...values };
        API.updateColor(updatedValues);
        getData();
        resetForm({ values: '' });
        handleDisplay();
      }
    }
  };

  const { handleChange, errors, handleSubmit, values, touched, handleBlur } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleReplace = (color) => {
    setColorData(color);
    handleDisplay();
  };

  const handleDelete = (color) => {
    API.deleteColor(color);
    getData();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '600px', pb: 8, pt: 3 }}>
      <Box container spacing={1}>
        <Box sx={{ my: 2, mx: 1 }}>
          <Typography variant="lightTextXl">Colors</Typography>
        </Box>
        <Box sx={{ mx: 1 }}>
          <Typography>Update or delete already existing colors</Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item sx={{ display: 'flex', py: 2, flexWrap: 'wrap' }}>
            {colors.map((color) => {
              const isThereDataWithColor = data.filter((el) => el.color.id === color.id);
              return (
                <Box
                  key={color.id}
                  sx={{ display: 'flex', backgroundColor: '#faf8f8', p: 2, m: 1, borderRadius: '4px' }}
                >
                  <DeleteForeverIcon
                    onClick={() => handleDelete(color)}
                    sx={{ display: isThereDataWithColor.length !== 0 ? 'none' : 'block' }}
                  />
                  <UpdateIcon sx={{ mx: 1 }} onClick={() => handleReplace(color)} />
                  <Typography>{color.title}</Typography>
                </Box>
              );
            })}
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: changeColorDisplay }}>
            {errors.title ? (
              <Typography sx={{ color: 'red' }}>{errors.title}</Typography>
            ) : (
              <Typography>Change color</Typography>
            )}
            <TextField
              name="title"
              variant="outlined"
              value={values.title}
              onChange={handleChange}
              fullWidth
              error={touched.title && Boolean(errors.title)}
              onBlur={handleBlur}
              spellCheck="false"
              placeholder={colorData.title}
            />
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: changeColorDisplay }}>
            <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
              Change color
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: addColorDisplay }}>
            {errors.title ? (
              <Typography sx={{ color: 'red' }}>{errors.title}</Typography>
            ) : (
              <Typography>Add color</Typography>
            )}
            <TextField
              name="title"
              variant="outlined"
              value={values.title}
              onChange={handleChange}
              fullWidth
              error={touched.title && Boolean(errors.title)}
              onBlur={handleBlur}
              spellCheck="false"
            />
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: addColorDisplay }}>
            <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
              Add color
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ColorsEdit;

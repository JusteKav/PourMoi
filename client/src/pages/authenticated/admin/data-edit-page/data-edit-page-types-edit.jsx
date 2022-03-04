import React, { useState, useContext } from 'react';
import { TextField, Grid, Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import API from '../../../../services/api-service';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
import { JewelryContext } from '../../../../contexts/contexts-jewelry-data';
import { checkTitle } from './data-edit-page-helpers';

const TypesEdit = () => {
  const [addTypeDisplay, setAddTypeDisplay] = useState('block');
  const [typeData, seTypeData] = useState('');
  const [changeTypeDisplay, setChangeTypeDisplay] = useState('none');
  const { types, getData, data } = useContext(JewelryContext);
  let initialValues = { title: '' };

  const handleDisplay = () => {
    if (changeTypeDisplay === 'none') {
      setChangeTypeDisplay('block');
      setAddTypeDisplay('none');
    } else {
      setChangeTypeDisplay('none');
      setAddTypeDisplay('block');
    }
  };

  const validationSchema = yup.object({
    title: yup.string().test('is-allowed-HsCode', 'This type already exists', (val) => checkTitle(val, types)),
  });

  const onSubmit = (values, { resetForm }) => {
    if (values.title.length !== 0) {
      if (addTypeDisplay === 'block') {
        API.addType(values);
        getData();
        resetForm({ values: '' });
      } else {
        const updatedValues = { ...typeData, ...values };
        API.updateType(updatedValues);
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

  const handleReplace = (type) => {
    seTypeData(type);
    handleDisplay();
  };

  const handleDelete = (type) => {
    API.deleteType(type);
    getData();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '600px', pb: 8, pt: 7 }}>
      <Box container spacing={1}>
        <Box sx={{ my: 2, mx: 1 }}>
          <Typography variant="lightTextXl">Types</Typography>
        </Box>
        <Box sx={{ mx: 1 }}>
          <Typography>Update or delete already existing types</Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item sx={{ display: 'flex', py: 2, flexWrap: 'wrap' }}>
            {types.map((type) => {
              const isThereDataWithType = data.filter((el) => el.type.id === type.id);
              return (
                <Box
                  key={type.id}
                  sx={{ display: 'flex', backgroundColor: '#faf8f8', p: 2, m: 1, borderRadius: '4px' }}
                >
                  <DeleteForeverIcon
                    onClick={() => handleDelete(type)}
                    sx={{ display: isThereDataWithType.length !== 0 ? 'none' : 'block' }}
                  />
                  <UpdateIcon sx={{ mx: 1 }} onClick={() => handleReplace(type)} />
                  <Typography>{type.title}</Typography>
                </Box>
              );
            })}
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: changeTypeDisplay }}>
            {errors.title ? (
              <Typography sx={{ color: 'red' }}>{errors.title}</Typography>
            ) : (
              <Typography>Change type</Typography>
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
              placeholder={typeData.title}
            />
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: changeTypeDisplay }}>
            <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
              Change type
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: addTypeDisplay }}>
            {errors.title ? (
              <Typography sx={{ color: 'red' }}>{errors.title}</Typography>
            ) : (
              <Typography>Add type</Typography>
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
          <Grid item xs={12} sx={{ mx: 1, display: addTypeDisplay }}>
            <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
              Add type
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TypesEdit;

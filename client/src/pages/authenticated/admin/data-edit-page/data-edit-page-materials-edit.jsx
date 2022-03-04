import React, { useState, useContext } from 'react';
import { TextField, Grid, Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import API from '../../../../services/api-service';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
import { JewelryContext } from '../../../../contexts/contexts-jewelry-data';
import { checkTitle } from './data-edit-page-helpers';

const MaterialsEdit = () => {
  const [addMaterialDisplay, setAddMaterialDisplay] = useState('block');
  const [materialData, setMaterialData] = useState('');
  const [changeMaterialDisplay, setChangeMaterialDisplay] = useState('none');
  const { materials, getData, data } = useContext(JewelryContext);
  let initialValues = { title: '' };

  const handleDisplay = () => {
    if (changeMaterialDisplay === 'none') {
      setChangeMaterialDisplay('block');
      setAddMaterialDisplay('none');
    } else {
      setChangeMaterialDisplay('none');
      setAddMaterialDisplay('block');
    }
  };

  const validationSchema = yup.object({
    title: yup.string().test('is-allowed-HsCode', 'This type already exists', (val) => checkTitle(val, materials)),
  });

  const onSubmit = (values, { resetForm }) => {
    if (values.title.length !== 0) {
      if (addMaterialDisplay === 'block') {
        API.addMaterial(values);
        getData();
        resetForm({ values: '' });
      } else {
        const updatedValues = { ...materialData, ...values };
        API.updateMaterial(updatedValues);
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
    setMaterialData(type);
    handleDisplay();
  };

  const handleDelete = (type) => {
    API.deleteMaterial(type);
    getData();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '600px', pb: 8, pt: 7 }}>
      <Box container spacing={1}>
        <Box sx={{ my: 2, mx: 1 }}>
          <Typography variant="lightTextXl">Materials</Typography>
        </Box>
        <Box sx={{ mx: 1 }}>
          <Typography>Update or delete already existing materials</Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item sx={{ display: 'flex', py: 2, flexWrap: 'wrap' }}>
            {materials.map((material) => {
              const isThereDataWithMaterial = data.filter((el) => el.material.id === material.id);
              return (
                <Box
                  key={material.id}
                  sx={{ display: 'flex', backgroundColor: '#faf8f8', p: 2, m: 1, borderRadius: '4px' }}
                >
                  <DeleteForeverIcon
                    onClick={() => handleDelete(material)}
                    sx={{ display: isThereDataWithMaterial.length !== 0 ? 'none' : 'block' }}
                  />
                  <UpdateIcon sx={{ mx: 1 }} onClick={() => handleReplace(material)} />
                  <Typography>{material.title}</Typography>
                </Box>
              );
            })}
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: changeMaterialDisplay }}>
            {errors.title ? (
              <Typography sx={{ color: 'red' }}>{errors.title}</Typography>
            ) : (
              <Typography>Change material</Typography>
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
              placeholder={materialData.title}
            />
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: changeMaterialDisplay }}>
            <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
              Change material
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: addMaterialDisplay }}>
            {errors.title ? (
              <Typography sx={{ color: 'red' }}>{errors.title}</Typography>
            ) : (
              <Typography>Add material</Typography>
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
          <Grid item xs={12} sx={{ mx: 1, display: addMaterialDisplay }}>
            <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
              Add material
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MaterialsEdit;

import React, { useState, useContext } from 'react';
import { TextField, Grid, Box, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import API from '../../../../services/api-service';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
import { JewelryContext } from '../../../../contexts/contexts-jewelry-data';
import { checkTitle } from './data-edit-page-helpers';

const StonesEdit = () => {
  const [addStoneDisplay, setAddStoneDisplay] = useState('block');
  const [stoneData, setStoneData] = useState('');
  const [changeStoneDisplay, setChangeStoneDisplay] = useState('none');
  const { stones, getData, data } = useContext(JewelryContext);
  let initialValues = { title: '' };

  const handleDisplay = () => {
    if (changeStoneDisplay === 'none') {
      setChangeStoneDisplay('block');
      setAddStoneDisplay('none');
    } else {
      setChangeStoneDisplay('none');
      setAddStoneDisplay('block');
    }
  };

  const validationSchema = yup.object({
    title: yup.string().test('is-allowed-HsCode', 'This type already exists', (val) => checkTitle(val, stones)),
  });

  const onSubmit = (values, { resetForm }) => {
    if (values.title.length !== 0) {
      if (addStoneDisplay === 'block') {
        API.addStone(values);
        getData();
        resetForm({ values: '' });
      } else {
        const updatedValues = { ...stoneData, ...values };
        API.updateStone(updatedValues);
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

  const handleReplace = (stone) => {
    setStoneData(stone);
    handleDisplay();
  };

  const handleDelete = (stone) => {
    API.deleteStone(stone);
    getData();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '600px', pb: 8, pt: 7 }}>
      <Box container spacing={1}>
        <Box sx={{ my: 2, mx: 1 }}>
          <Typography variant="lightTextXl">Stones</Typography>
        </Box>
        <Box sx={{ mx: 1 }}>
          <Typography>Update or delete already existing stones</Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item sx={{ display: 'flex', py: 2, flexWrap: 'wrap' }}>
            {stones.map((stone) => {
              const isThereDataWithStone = data.filter((el) => el.stones.some((el) => el.id === stone.id));
              return (
                <Box
                  key={stone.id}
                  sx={{ display: 'flex', backgroundColor: '#faf8f8', p: 2, m: 1, borderRadius: '4px' }}
                >
                  <DeleteForeverIcon
                    onClick={() => handleDelete(stone)}
                    sx={{ display: isThereDataWithStone.length !== 0 ? 'none' : 'block' }}
                  />
                  <UpdateIcon sx={{ mx: 1 }} onClick={() => handleReplace(stone)} />
                  <Typography>{stone.title}</Typography>
                </Box>
              );
            })}
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: changeStoneDisplay }}>
            {errors.title ? (
              <Typography sx={{ color: 'red' }}>{errors.title}</Typography>
            ) : (
              <Typography>Change stone</Typography>
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
              placeholder={stoneData.title}
            />
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: changeStoneDisplay }}>
            <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
              Change stone
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ mx: 1, display: addStoneDisplay }}>
            {errors.title ? (
              <Typography sx={{ color: 'red' }}>{errors.title}</Typography>
            ) : (
              <Typography>Add stone</Typography>
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
          <Grid item xs={12} sx={{ mx: 1, display: addStoneDisplay }}>
            <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
              Add stone
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StonesEdit;

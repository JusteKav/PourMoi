import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const FormTextfield = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const textFieldProps = {
    ...field,
    ...otherProps,
  };

  if (meta && meta.touched && meta.error) {
    textFieldProps.error = true;
    textFieldProps.helperText = meta.error;
  }

  return <TextField fullWidth={true} variant="outlined" size="small" {...textFieldProps} />;
};

export default FormTextfield;

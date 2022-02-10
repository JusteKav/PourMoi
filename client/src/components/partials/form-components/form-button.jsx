import React from 'react';
import { Button } from '@mui/material';

const FormButton = ({ children }) => {
  return (
    <Button fullWidth={true} type="submit">
      {children}
    </Button>
  );
};

export default FormButton;

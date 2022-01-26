import * as React from 'react';
import { Box, Typography, Divider, Checkbox, FormGroup, FormControlLabel, Modal } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';

const materials = [
  {
    id: '1',
    title: '925 Sterling Silver',
  },
  {
    id: '2',
    title: '18K Gold Plating',
  },
  {
    id: '3',
    title: '18K Solid Yellow Gold',
  },
  {
    id: '4',
    title: '18K Solid White Gold',
  },
  {
    id: '5',
    title: 'Rhodlum Silver Plating',
  },
];
const colors = [
  {
    id: '1',
    title: 'Gold',
  },
  {
    id: '2',
    title: 'Silver',
  },
];

const style = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: 250,
  bgcolor: 'white',
};

const FiltersModal = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box onClick={handleOpen} sx={{ width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          '& :focus': {
            outline: 'none',
          },
        }}
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} sx={{ color: 'white', position: 'absolute', top: 5, left: -25 }} />
          <Box sx={{ height: 90, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="boldTextS">FIND WHAT SUITS YOU</Typography>
          </Box>
          <Divider />
          <Box sx={{ height: 70, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>Sort by:</Typography>
            <SortIcon sx={{ mx: 1 }} />
            <Typography>Lowest price</Typography>
          </Box>
          <Divider />
          <Box sx={{ py: 4, pl: 3 }}>
            <Box>
              <Typography variant="boldTextXs">COLOR</Typography>
              <FormGroup sx={{ py: 1 }}>
                {colors.map(({ id, title }) => {
                  return (
                    <FormControlLabel
                      sx={{ height: 25 }}
                      key={id}
                      control={<Checkbox color="secondary" />}
                      label={title}
                    />
                  );
                })}
              </FormGroup>
            </Box>
            <Box sx={{ pt: 4 }}>
              <Typography variant="boldTextXs">COLOR</Typography>
              <FormGroup sx={{ py: 1 }}>
                {materials.map(({ id, title }) => {
                  return (
                    <FormControlLabel
                      sx={{ height: 25 }}
                      key={id}
                      control={<Checkbox color="secondary" />}
                      label={title}
                    />
                  );
                })}
              </FormGroup>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default FiltersModal;

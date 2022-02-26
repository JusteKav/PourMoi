// import React, { useState, useEffect, useRef } from 'react';
// import {
//   TextField,
//   Grid,
//   Box,
//   Button,
//   Dialog,
//   Select,
//   MenuItem,
//   InputLabel,
//   Checkbox,
//   ListItemText,
//   Typography,
// } from '@mui/material';
// import { useFormik } from 'formik';
// import API from '../../../services/api-service';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// const AdminBasicModal = ({ initialDataValues, icon, oldValues }) => {
//   const initialValues = { ...initialDataValues };

//   const [colors, setColors] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const fetchedColors = await API.getColors();
//       setColors(fetchedColors.colors);
//     })();
//   }, []);

//   const onSubmit = async (values) => {
//     console.log(values);
//     handleClose();
//   };

//   const { handleChange, handleSubmit, values } = useFormik({
//     initialValues,
//     onSubmit,
//   });

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleDelete = (color) => {
//     API.deleteColor(color);
//     console.log('istrinta');
//   };
//   return (
//     <>
//       <Box onClick={handleClickOpen} sx={{ display: 'flex' }}>
//         <AddCircleIcon />
//       </Box>
//       <Dialog open={open} onClose={handleClose}>
//         <Box sx={{ px: 4, pt: 4 }}>
//           {colors.map((color) => {
//             return (
//               <Box sx={{ display: 'flex' }}>
//                 <DeleteForeverIcon onClick={handleDelete(color)} />
//                 <Typography onClick={handleDelete}>{color.title}</Typography>
//               </Box>
//             );
//           })}
//         </Box>
//         <Box component="form" onSubmit={handleSubmit} sx={{ width: '600px', p: 4 }}>
//           <Grid container spacing={1}>
//             <Grid item xs={12}>
//               <InputLabel>Add Color</InputLabel>
//               <TextField name="title" variant="outlined" value={values.title} onChange={handleChange} fullWidth />
//             </Grid>
//             <Grid item xs={12}>
//               <Button sx={{ my: 2, height: '40px' }} variant="contained" fullWidth type="submit">
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Dialog>
//     </>
//   );
// };

// export default AdminBasicModal;

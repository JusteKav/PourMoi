import { Typography, Box, Card, CardMedia } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ItemCard = ({ name, material, imageUrl, price }) => {
  return (
    <Card sx={{ width: '100%', height: '100%', position: 'relative', p: 0 }}>
      <CardMedia component="img" image={imageUrl} sx={{ width: '100%' }} alt="jewelry" />
      <Box sx={{ backgroundColor: 'white', p: { xs: 2, md: 2 } }}>
        <Typography sx={{ fontWeight: 500 }}>{name}</Typography>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{material}</Typography>
        <Typography>€{price}</Typography>
        <Box sx={{ position: 'absolute', right: 10, bottom: 6 }}>
          <FavoriteBorderOutlinedIcon />
          <ShoppingCartOutlinedIcon />
        </Box>
      </Box>
    </Card>
  );
};

export default ItemCard;

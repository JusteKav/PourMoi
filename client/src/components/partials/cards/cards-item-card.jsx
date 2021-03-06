import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth';
import { Typography, Box, Card, CardMedia } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
import API from '../../../services/api-service';
import AdminPopupDashboard from '../../../pages/for-everyone/items-page/items-page-admin-jewelry-modal';
import { JewelryContext } from '../../../contexts/contexts-jewelry-data';
import StyledLink from '../styled-small-components/styled-link';

const ItemCard = ({ jewelry }) => {
  const { files, title, material, price, weight, color, type, stones } = jewelry;
  const auth = useSelector(authSelector);
  const jewelryState = useContext(JewelryContext);

  const handleDelete = async () => {
    await API.deleteJewelry(jewelry);
    await jewelryState.getData();
  };

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/item/${jewelry.id}`);
  };

  return (
    <Card sx={{ width: '100%', height: '100%', position: 'relative', p: 0 }}>
      <CardMedia
        onClick={() => handleNavigation()}
        image={files[0]}
        component="img"
        sx={{ width: '100%' }}
        alt="jewelry"
      />
      <Box sx={{ backgroundColor: 'white', p: { xs: 2, md: 2 } }}>
        <StyledLink title={title} link={`/item/${jewelry.id}`}></StyledLink>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{material.title}</Typography>
        <Typography>€{price}</Typography>
        {auth.user !== null ? (
          auth.user.role === 'ADMIN' ? (
            <Box sx={{ position: 'absolute', display: 'flex', right: 10, bottom: 6 }}>
              <DeleteForeverIcon onClick={handleDelete} />
              <AdminPopupDashboard
                oldValues={jewelry}
                icon={<UpdateIcon />}
                initialDataValues={{
                  title: title,
                  price: price,
                  weight: weight,
                  color: color.id,
                  material: material.id,
                  type: type.id,
                  stones: stones.map((el) => el.id),
                  files: [],
                }}
              />
            </Box>
          ) : (
            <Box sx={{ position: 'absolute', right: 10, bottom: 6 }}>
              <FavoriteBorderOutlinedIcon />
              <ShoppingCartOutlinedIcon />
            </Box>
          )
        ) : null}
      </Box>
    </Card>
  );
};

export default ItemCard;

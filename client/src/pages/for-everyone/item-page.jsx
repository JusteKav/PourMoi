import { Grid, Typography, Button, Divider, Box, useTheme } from '@mui/material';
import AlignmentContainer from '../../components/partials/containers/alignment-container';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Carousel from 'react-material-ui-carousel';
import API from '../../services/api-service';
import StyledLink from '../../components/partials/styled-small-components/styled-link';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const freeOffersData = [
  { iconName: <HttpsOutlinedIcon />, text: '30 days for exchanges and returns' },
  { iconName: <DiamondOutlinedIcon />, text: 'Hand-finished jewelry with premium materials' },
  { iconName: <ChangeCircleOutlinedIcon />, text: '2 years warranty' },
];

const ItemPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getJewelry = async () => {
    const jewelry = await API.getJewelry(id);
    setData(jewelry);
  };

  useEffect(() => {
    getJewelry();
  }, []);

  return (
    <AlignmentContainer
      sx={{
        minHeight: `calc(100vh - ${theme.mixins.footer.height}  - ${theme.mixins.navbar.height}) `,
        alignItems: 'start',
      }}
    >
      {data.length !== 0 ? (
        <Grid container>
          <Grid item xs={12} sx={{ pb: 4 }}>
            <StyledLink title={'🠔 Back'} link={`/items`} sx={{ fontWeight: 400 }}></StyledLink>
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            <Box>
              <Carousel navButtonsAlwaysVisible={false} indicators={false} topAutoPlayOnHover={true}>
                {data.files.map((file, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        backgroundImage: `url(${file})`,
                        height: { xs: '60vh', sm: 650 },
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '100%',
                      }}
                    ></Box>
                  </Box>
                ))}
              </Carousel>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={5}
            sx={{ px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: { xs: 3, sm: '15%' },
                flexDirection: { xs: 'column', md: 'row' },
                pt: 2,
              }}
            >
              <Typography variant="boldTextM">{data.title}</Typography>
              <Typography variant="boldTextM">€{data.price}.00</Typography>
            </Box>
            <Box>
              <Box sx={{ dispay: 'flex' }}>
                <Typography variant="boldTextXs">MATERIAL: </Typography>
                <Typography variant="regularTextXs">{data.material.title}</Typography>
              </Box>
              <Box sx={{ dispay: 'flex' }}>
                <Typography variant="boldTextXs">COLOR: </Typography>
                <Typography variant="regularTextXs">{data.color.title}</Typography>
              </Box>
              <Box sx={{ dispay: 'flex' }}>
                <Typography variant="boldTextXs">WEIGHT: </Typography>
                <Typography variant="regularTextXs">{data.weight} g</Typography>
              </Box>
              <Box sx={{ dispay: 'flex' }}>
                <Typography variant="boldTextXs">TYPE: </Typography>
                <Typography variant="regularTextXs">{data.type.title}</Typography>
              </Box>
              <Box sx={{ dispay: 'flex' }}>
                <Typography variant="boldTextXs">{data.stones.length !== 0 ? 'STONES: ' : null} </Typography>
                {data.stones.length !== 0
                  ? data.stones.map((stone) => (
                      <Typography key={stone.id} variant="regularTextXs">
                        {`${stone.title} | `}
                      </Typography>
                    ))
                  : null}
              </Box>
              <Button variant="outlined" sx={{ backgroundColor: 'black', width: '100%', borderRadius: 0, mt: 3 }}>
                ADD TO CART
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <Divider sx={{ mt: 3, mb: 1 }} />
              {freeOffersData.map(({ iconName, text }) => {
                return (
                  <Box sx={{ display: 'flex', alignItems: 'center' }} key={text}>
                    {iconName}
                    <Typography sx={{ mx: 1 }} variant="regularTextXs">
                      {text}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      ) : null}
    </AlignmentContainer>
  );
};

export default ItemPage;

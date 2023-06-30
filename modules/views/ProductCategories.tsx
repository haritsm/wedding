import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: '/galeri1.jpg',
    title: 'Snorkeling',
    width: '40%',
  },
  {
    url: '/galeri2.jpg',
    title: 'Massage',
    width: '20%',
  },
  {
    url: '/galeri3.jpg',
    title: 'Hiking',
    width: '40%',
  },
  {
    url: '/galeri4.jpg',
    title: 'Tour',
    width: '38%',
  },
  {
    url: '/galeri5.jpg',
    title: 'Gastronomy',
    width: '38%',
  },
  {
    url: '/galeri6.jpg',
    title: 'Shopping',
    width: '24%',
  }
];

export default function ProductCategories() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container 
      component="section" 
      // sx={{ mt: 8, mb: 4 }}
      sx={
        matches == false ? {
          mt: 10,
          mb: 10,
        } : {
          mt: 5,
          mb: 5,
        }
      }
    >
      {!matches &&
      <Typography textAlign='center' color="inherit" variant="h4" marked="center" component="h2" sx={{ mb: 8}} >
        Galeri Kami
      </Typography>
      }
      {matches &&
      <Typography textAlign='center' color="inherit" variant="h5" marked="center" component="h2" sx={{ mb: 5}} >
        Galeri Kami
      </Typography>
      }

      <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 50%',
                backgroundImage: `url(${image.url})`,
              }}
            />
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}

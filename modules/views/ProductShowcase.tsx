import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Avatar from '@mui/material/Avatar';

const productShocaseData = [
  {
    id: 1,
    imgSrc: "/Krissy.PNG",
    altText: 'Krissy Kirana Dewi',
    title: 'Krissy Kirana Dewi',
    text: 'Lorem ipsum dolor sitamet. Lorem ipsum dolor sitamet. Lorem ipsum dolor sitamet. Lorem ipsum dolor sitamet. Lorem ipsum dolor sitamet. ',
  },
  {
    id: 2,
    imgSrc: "/Harits.jpg",
    altText: 'Harits Muhammad',
    title: 'Harits Muhammad',
    text: 'Lorem ipsum dolor sitamet. Lorem ipsum dolor sitamet. Lorem ipsum dolor sitamet. Lorem ipsum dolor sitamet. Lorem ipsum dolor sitamet. ',
  },
];

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 2,
};

export default function ProductHowItWorks() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <Box
      component="section"
      sx={{ 
        display: 'flex'
        , bgcolor: '#537188'
        , overflow: 'hidden' 
      }}
    >
      <Container
        sx={
          matches == false ? {
            mt: 10,
            mb: 10,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } : {
            mt: 5,
            mb: 5,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }
        }
      >
        <Box
          component="img"
          // src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        {!matches &&
        <Typography color="inherit" variant="h4" marked="center" component="h2" sx={{ mb: 8}} >
          Kami Yang Berbahagia
        </Typography>
        }
        {matches &&
        <Typography color="inherit" variant="h5" marked="center" component="h2" sx={{ mb: 5}} >
          Kami Yang Berbahagia
        </Typography>
        }

        {!matches && 
        <Grid container direction="row" spacing={4} alignContent="center" textAlign="center" justifyContent='center'>
        {productShocaseData ? productShocaseData.map((item) =>  (
          <Grid item xs={6} md={5}>
            <ProductDetailItem object={item} />
          </Grid>
        )) : null }
        </Grid>
        }
        {matches && 
        <Grid container direction="column" spacing={4} alignContent="center" textAlign="center" justifyContent='center'>
        {productShocaseData ? productShocaseData.map((item) =>  (
          <Grid item xs={4} md={4}>
            <ProductDetailItem object={item} matches={matches} />
          </Grid>
        )) : null }
        </Grid>
        }
        
      </Container>
    </Box>
  );
}

function ProductDetailItem({object, matches}: any){
  return (
    <div>
      <Box sx={item}>
        <Card 
          sx={{ 
            bgcolor: '#FAF0E4',
            my: 1,
            mx: 'auto',
            p: 4,
          }}
          variant='outlined'
        >
          <CardActionArea>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={5}
            >
              <Grid item>
                <Avatar 
                  src={object.imgSrc} 
                  sx={matches == true ?
                    { width: 100, height: 100 } : { width: 180, height: 180 }
                  }
                />
              </Grid>
              <Grid item>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="div"
                >
                  {object.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                >
                  {object.text}
                </Typography>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  )
}

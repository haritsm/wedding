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

const bankTransferData = [
  {
    id: 1,
    altText: 'BCA Harits',
    title: 'BCA ',
    caption: '6030886621',
    text: 'A/n Harits Muhammad',
  },
  {
    id: 2,
    altText: 'Mandiri Harits',
    title: 'Bank Mandiri',
    caption: '1010007885229',
    text: 'A/n Harits Muhammad',
  },
  {
    id: 3,
    altText: 'Jago Harits',
    title: 'Bank Jago',
    caption: '108243601169',
    text: 'A/n Harits Muhammad',
  },
];

const eWalletData = [
  {
    id: 1,
    altText: 'GoPay Harits',
    title: 'GoPay',
    caption: '6030886621',
    text: 'A/n Harits Muhammad',
  },
  {
    id: 2,
    altText: 'OVO Harits',
    title: 'OVO',
    caption: '1010007885229',
    text: 'A/n Harits Muhammad',
  },
  {
    id: 3,
    altText: 'Dana Harits',
    title: 'DANA',
    caption: '108243601169',
    text: 'A/n Harits Muhammad',
  },
];

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 2,
};

export default function BankTransfer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{ 
        display: 'flex'
        , bgcolor: '#2B2A4C'
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
          Amplop Digital
        </Typography>
        }
        {matches &&
        <Typography textAlign='center' color="inherit" variant="h5" marked="center" component="h2" sx={{ mb: 5}} >
          Amplop Digital
        </Typography>
        }

        {!matches && 
        <>
        <Grid container direction="column" spacing={4} justifyContent='center'>
          <Grid item>
            <Grid container direction="row" spacing={4} alignContent="center" textAlign="center" justifyContent='center'>
            {bankTransferData ? bankTransferData.map((item) =>  (
              <Grid item xs md>
                <TransferItem object={item} />
              </Grid>
            )) : null }
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={4} alignContent="center" textAlign="center" justifyContent='center'>
            {eWalletData ? eWalletData.map((item) =>  (
              <Grid item xs md>
                <TransferItem object={item} />
              </Grid>
            )) : null }
            </Grid>
          </Grid>
        </Grid>
        </>
        }

        {matches && 
        <Grid container direction="column" spacing={4} justifyContent='center'>
          <Grid item>
            <Grid container direction="column" spacing={4} alignContent="center" textAlign="center" justifyContent='center'>
            {bankTransferData ? bankTransferData.map((item) =>  (
              <Grid item xs>
                <TransferItem object={item} />
              </Grid>
            )) : null }
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={4} alignContent="center" textAlign="center" justifyContent='center'>
            {eWalletData ? eWalletData.map((item) =>  (
              <Grid item>
                <TransferItem object={item} />
              </Grid>
            )) : null }
            </Grid>
          </Grid>
        </Grid>
        }
        
      </Container>
    </Box>
  );
}

function TransferItem({object}: any){
  return (
    <div>
      <Box 
        sx={item}
      >
        <Card
          sx={{ 
            bgcolor: '#EEEEEE',
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
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="div"
                >
                  {object.title}
                </Typography>
                <Typography 
                  gutterBottom 
                  variant="h6" 
                  component="div"
                >
                  {object.caption}
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

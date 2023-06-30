import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function Facilities() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: '#967E76', overflow: 'hidden' }}
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
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        {!matches &&
        <Typography textAlign='center' color="inherit" variant="h4" marked="center" component="h2" sx={{ mb: 8}} >
          Hitung mundur<br />menuju pernikahan kami
        </Typography>
        }
        {matches &&
        <Typography textAlign='center' color="inherit" variant="h5" marked="center" component="h2" sx={{ mb: 5}} >
          Hitung mundur<br />menuju pernikahan kami
        </Typography>
        }
        <div>
          <Grid container spacing={5}>
            <Grid item //xs={12} md={4}
            >
              <Box sx={item}>
                <Typography variant="h5" align="center">
                  XXX
                </Typography>
              </Box>
            </Grid>
            {/* <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/productHowItWorks2.svg"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  First come, first served. Our offers are in limited quantities, so
                  be quick.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/productHowItWorks3.svg"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {'New offers every week. New experiences, new surprises. '}
                  {'Your Sundays will no longer be alike.'}
                </Typography>
              </Box>
            </Grid> */}
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default Facilities;

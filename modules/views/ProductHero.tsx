import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const backgroundImage = '/Banner.jpg';

export default function ProductHero() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      {!matches &&
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Krissy & Harits
      </Typography>
      }
      {matches &&
      <Typography color="inherit" align="center" variant="h5" marked="center">
        Krissy & Harits
      </Typography>
      }
      {!matches &&
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 1, sm: 3 } }}
      >
        23.09.2023
      </Typography>
      }
      {matches &&
      <Typography
        color="inherit"
        align="center"
        variant="h6"
        sx={{ mb: 4, mt: 2 }}
      >
        23.09.2023
      </Typography>
      }
    </ProductHeroLayout>
  );
}

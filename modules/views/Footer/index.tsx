import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import styles from './Footer.module.css';
import Social from "./Social";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import Link from '@mui/material/Link';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Divider } from '@mui/material';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        2023 Harits Muhammad. All rights reserved.
    </Typography>
  );
}

export default function Footer() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <footer className={styles.footer}>
          <Container
            sx={{
              // borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              mt: 1,
              py: [4, 4],
            }}
          >
            {!matches &&
            <>
              <Grid container spacing={1} 
                justifyContent="center" 
                direction={"row"}
                alignItems="center"
              >
                
                <Grid item xs={5}>
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Krissy & Harits wedding invitation
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    An invitation landing page created by Harits Muhammad, himself.<br />Because, why not?
                  </Typography>
                </Grid>

                <Divider orientation="vertical" flexItem />

                <Grid item xs={6}>
                  <Grid>
                    <Social />
                  </Grid>
                  <Grid>
                    <Copyright sx={{ mt: 1 }} />
                  </Grid>
                </Grid>
              </Grid>
            </>
            }
          {matches && 
          <>
            <Grid mb={3} item container spacing={1} justifyContent="center" alignItems="center" direction="column">
              <Grid item>
                <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'bold' }} gutterBottom>
                  Krissy & Harits wedding invitation
                </Typography>
              </Grid>
              <Grid item>
                <Typography textAlign='center' variant="body2" color="text.secondary" gutterBottom>
                  An invitation landing page created by Harits Muhammad, himself. Because, why not?
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid mt={3} item container spacing={1} justifyContent="center" alignItems="center" direction="column">
              <Grid item>
                <Social />
              </Grid>
              <Grid item>
                <Copyright/>
              </Grid>
            </Grid>
          </> 
          }
          </Container>
          
        </footer>
      );
}
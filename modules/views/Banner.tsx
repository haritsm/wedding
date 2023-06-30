import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Grid from "@mui/material/Grid";

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <div className="landing-page">
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                  <Typography
                    align="center"
                    style={{
                      fontSize: "2rem",
                    }}
                  >
                    Undangan Pernikahan
                  </Typography>
                </Grid>
                
                <Grid item>
                    <Typography
                        align="center"
                        style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        }}
                    >
                    Krissy & Harits
                    </Typography>
                </Grid>
                <Divider />
                <br />
                {/* <Grid item>
                  <Typography paragraph align="center">
                    Bismillah
                  </Typography>
                </Grid> */}
                <Grid item>
                  <Typography paragraph align="center">
                    <Button variant="outlined" onClick={handleClose}>
                        Buka undangan
                    </Button>
                  </Typography>
                </Grid>
            </Grid>
        </div>
      </Dialog>
    </div>
  );
}
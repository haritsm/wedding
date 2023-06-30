import { Grid } from '@mui/material';
import styles from './Footer.module.css';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import { purple } from '@mui/material/colors';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialMedia = {
    instagram: "https://www.instagram.com/haritsmhmd/",
    github: "#",
    linkedin: "#"
  };

const Social = ({}) => {
  const { instagram, github, linkedin } = socialMedia;

  return (
    <Grid item container sx={{ flexGrow: 1 }} spacing={3} justifyContent="center">
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={instagram}
      >
        <InstagramIcon
            className={styles.snsIcon}
            sx={{ color: purple[500] }}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={linkedin}
      >
        <LinkedInIcon 
          className={styles.snsIcon}
          sx={{ color: blue[900] }}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={github}
      >
        <GitHubIcon 
          className={styles.snsIcon}
          sx={{ color: grey[900] }}
        />
      </Grid>
    </Grid>
  );
};

export default Social;
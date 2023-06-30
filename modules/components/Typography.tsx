import * as React from 'react';
import { styled, Theme } from '@mui/material/styles';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';

const markClassesMapping: {
  [index: string]: { [subindex: string]: string };
} = {
  center: {
    h1: '',
    h2: 'OnePirateTypography-markedH2Center',
    h3: 'OnePirateTypography-markedH3Center',
    h4: 'OnePirateTypography-markedH4Center',
    h5: 'OnePirateTypography-markedH4Center',
    h6: '',
  },
  left: {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: 'OnePirateTypography-markedH6Left',
  },
  none: {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
  },
};

const styles = ({ theme }: { theme: Theme }) => ({
  [`& .${markClassesMapping.center.h2}`]: {
    height: 2,
    width: 200,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: '#fff',
  },
  [`& .${markClassesMapping.center.h3}`]: {
    height: 4,
    width: 70,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: '#fff',
  },
  [`& .${markClassesMapping.center.h4}`]: {
    height: 2,
    width: 300,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
    // backgroundColor: theme.palette.secondary.light,
    backgroundColor: '#fff',
  },
  [`& .${markClassesMapping.center.h5}`]: {
    height: 2,
    width: 125,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
    // backgroundColor: theme.palette.secondary.light,
    backgroundColor: '#fff',
  },
  [`& .${markClassesMapping.left.h6}`]: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
    background: 'currentColor',
  },
});

interface ExtraTypographyProps {
  marked?: 'center' | 'left' | 'none';
}

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3',
};

function Typography<C extends React.ElementType>(
  props: TypographyProps<C, { component?: C }> & ExtraTypographyProps,
) {
  const { children, variant, marked = 'none', ...other } = props;

  let markedClassName = '';
  if (variant && variant in markClassesMapping[marked]) {
    markedClassName = markClassesMapping[marked][variant];
  }

  return (
    <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {markedClassName ? <span className={markedClassName} /> : null}
    </MuiTypography>
  );
}

export default styled(Typography)(styles);

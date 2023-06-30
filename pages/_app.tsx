import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Backdrop from "@mui/material/Backdrop";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const StyledBackdrop = styled(Backdrop)`
  .MuiBackdrop-root {
    background-color: black;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, []);
  return (
    <>
    {
      <StyledBackdrop
        sx={{ color: "#0000"}}
        open={loading}
        transitionDuration={500}
      >
        <CircularProgress color="inherit" />
      </StyledBackdrop>
      }
      {loading == false &&
      <Component {...pageProps} />
      }
    </>
    
    
  )
}

export default MyApp

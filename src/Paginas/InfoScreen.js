import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import '../Styles/info-screen.css';
import NavBar from '../components/NavBar';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });
//TODO: terminar infoscreen, fazer com que possa ser chamada, e passado o texto a ser exibido, o nome do botao e o link do botao.
function InfoScreen() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} />
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Box>
            <Typography variant="h2">{}</Typography>
            <Divider orientation="horizontal" flexItem />
          </Box>


          <Button variant="contained" href="/QuemSomos">Home</Button>

        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default InfoScreen;
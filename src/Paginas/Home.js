import React from 'react';
import '../Styles/home.css';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Stack, Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Home() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Container component="main">
        <NavBar page={1} />

        <Typography variant="h2" align='left'>Meus Jazigos</Typography>


      </Container>
    </ThemeProvider>
  );
}

export default Home;
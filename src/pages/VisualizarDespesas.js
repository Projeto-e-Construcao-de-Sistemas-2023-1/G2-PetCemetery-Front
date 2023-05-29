import React from 'react';
import '../Styles/visualizar-despesas.css';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Stack, Button, Typography, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function VisualizarDespesas() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} />
      <Titulo texto="Suas despesas" />
      <Container component="main">

      </Container>

    </ThemeProvider >
  );
}

export default VisualizarDespesas;
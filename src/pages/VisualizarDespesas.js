import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/visualizar-despesas.css';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function VisualizarDespesas() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cpf = searchParams.get('cpf');

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Suas despesas" mW="sm" />
      <Container component="main">

      </Container>

    </ThemeProvider >
  );
}

export default VisualizarDespesas;
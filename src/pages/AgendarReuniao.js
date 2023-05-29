import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/agendar-reuniao.css';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AgendarReuniao() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cpf = searchParams.get('cpf');
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Agendar Reunião" mW="md" />
      <Container component="main">


      </Container>

    </ThemeProvider >
  );
}

export default AgendarReuniao;
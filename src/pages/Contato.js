import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import '../Styles/contato.css';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Contato() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={4} />
      <Titulo texto="Contato" />

      <Container component="main">
        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Typography variant="h6">
            Email: contato@petcemetery.com<br />
            Telefone: (21) 1234-5678 (24h)<br />
            Horário de Funcionamento:<br />
            Segunda a domingo, das 6:00 às 22:30
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Contato;
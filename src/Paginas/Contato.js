import React from 'react';
import '../Styles/contato.css';
import { Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import NavBar from '../components/NavBar';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Contato() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={4} />
      <Container component="main">
        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Box sx={{ margin: 2 }}>
            <Typography variant="h2">Contato</Typography>
            <Divider orientation="horizontal" flexItem />
          </Box>
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
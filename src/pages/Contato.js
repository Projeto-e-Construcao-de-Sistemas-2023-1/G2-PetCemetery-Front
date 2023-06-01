import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import '../Styles/contato.css';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { getUrlParams } from '../utils/utils';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Contato() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cpf = getUrlParams('cpf');

  useEffect(() => {
    if (cpf == null) setIsLoggedIn(false);
    else setIsLoggedIn(true);
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar page={4} isLoggedIn={isLoggedIn} cpf={cpf} />
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
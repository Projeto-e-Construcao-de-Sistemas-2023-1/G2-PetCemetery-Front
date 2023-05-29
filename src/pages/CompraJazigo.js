import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function CompraJazigo() {
  const navigate = useNavigate();
  const [jazigo, setJazigo] = useState(""); // Supondo que jazigoData é um objeto com as informações do jazigo

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jazigoId = searchParams.get('id');
  const cpf = searchParams.get('cpf');

  const handleJazigo = (jazigo) => {
    jazigo.name = jazigo.split(";");
    //console.log(emailInput);
  }
  //TODO: Fazer o fetch do preço do jazigo pelo id, e colocar no lugar do 30000
  const handleComprar = (e) => { navigate(`/ComprarOrnamento?cpf=${cpf}&id=${jazigoId}`); }

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar />
      <Titulo texto={"Jazigo " + (+jazigoId + 1)} />
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Typography variant="h6">{`Valor do Jazigo: R$ 30000,00`}</Typography>
          <Divider orientation="horizontal" flexItem sx={{ margin: 2 }} />
          <Stack spacing={2} direction='row'>
            <Button variant="contained" onClick={() => { handleComprar(); }}>Comprar Pacote de Ornamentos</Button>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CompraJazigo;
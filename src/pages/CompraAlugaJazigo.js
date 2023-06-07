import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { getUrlParams } from '../utils/utils';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function CompraAlugaJazigo() {
  const navigate = useNavigate();
  const [tipoTransacao, setTipoTransacao] = useState("");

  const jazigoId = getUrlParams('id');
  const cpf = getUrlParams('cpf');
  const tipo = getUrlParams('tipo');

  useEffect(() => {
    setTipoTransacao(tipo == "compra" ? "Comprar" : "Alugar");
  }, []);

  //TODO: Fazer o fetch do preço do jazigo pelo id, e colocar no lugar do 30000
  const handleComprar = (e) => { navigate(`/ComprarOrnamento?cpf=${cpf}&id=${jazigoId}`); }

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto={tipoTransacao + " Jazigo " + jazigoId} />
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

export default CompraAlugaJazigo;
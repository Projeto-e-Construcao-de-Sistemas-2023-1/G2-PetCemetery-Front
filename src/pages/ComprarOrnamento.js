import { Button, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function ComprarOrnamento() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jazigoId = searchParams.get('id');
  const cpf = searchParams.get('cpf');

  const [selectedOrnament, setSelectedOrnament] = useState('Gold');

  const handleChange = (event) => {
    setSelectedOrnament(event.target.value);
  };
  //TODO: fazer o componente de compra e usar aqui
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar />
      <Titulo texto="Escolha o pacote de ornamentos" mW="lg" />
      <Container component="main" maxWidth="xs">

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Stack direction='column'>
            <FormControlLabel control={<Checkbox checked={selectedOrnament === 'Basic'} onChange={handleChange} value="Basic" />} label="Basic: Mensagem e Foto - R$1,00" />
            <FormControlLabel control={<Checkbox checked={selectedOrnament === 'Silver'} onChange={handleChange} value="Silver" />} label="Silver: Mensagem, Foto e Flores - R$50,00" />
            <FormControlLabel control={<Checkbox checked={selectedOrnament === 'Gold'} onChange={handleChange} value="Gold" />} label="Gold: Mensagem, Foto, Flores e Catavento - R$80,00" />
            <Divider orientation="horizontal" flexItem sx={{ margin: 2 }} />
            <Stack spacing={2} direction='row'>
              <Button variant="contained" onClick={() => { navigate(`/ConfirmarCompra?cpf=${cpf}&id=${jazigoId}`); }}>Comprar</Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ComprarOrnamento;
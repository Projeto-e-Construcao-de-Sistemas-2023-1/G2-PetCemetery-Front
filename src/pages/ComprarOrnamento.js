import { Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import { getUrlParams } from '../utils/utils';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function ComprarOrnamento() {
  const navigate = useNavigate();
  const jazigoId = getUrlParams('id');
  const cpf = getUrlParams('cpf');

  const [selectedOrnament, setSelectedOrnament] = useState('gold');

  const handleChange = (event) => {
    setSelectedOrnament(event.target.value);
  };
  //TODO: fazer o componente de compra e usar aqui
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} cpf={cpf} />
      <Titulo texto="Escolha o pacote de ornamentos" mW="lg" />
      <Container component="main" maxWidth="xs">

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Stack direction='column'>
            <FormControlLabel control={<Checkbox checked={selectedOrnament === 'basic'} onChange={handleChange} value="basic" />} label="Basic: Mensagem e Foto - R$1,00" />
            <FormControlLabel control={<Checkbox checked={selectedOrnament === 'silver'} onChange={handleChange} value="silver" />} label="Silver: Mensagem, Foto e Flores - R$50,00" />
            <FormControlLabel control={<Checkbox checked={selectedOrnament === 'gold'} onChange={handleChange} value="gold" />} label="Gold: Mensagem, Foto, Flores e Catavento - R$80,00" />
            <Divider orientation="horizontal" flexItem sx={{ margin: 2 }} />
            <Stack spacing={2} direction='row'>
              <Button variant="contained" onClick={() => { navigate(`/ConfirmarCompra?cpf=${cpf}&id=${jazigoId}&ornamento=${selectedOrnament}`); }}>Comprar</Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ComprarOrnamento;
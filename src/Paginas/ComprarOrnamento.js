import { Button, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function ComprarOrnamento() {
  const navigate = useNavigate();

  const [selectedOrnament, setSelectedOrnament] = useState('Gold');

  const handleChange = (event) => {
    setSelectedOrnament(event.target.value);
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar />
      <Container component="main" maxWidth="xs">
        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Typography variant="h5" component="h2">Escolha o pacote de ornamentos</Typography>
          <FormControlLabel control={<Checkbox checked={selectedOrnament === 'Basic'} onChange={handleChange} value="Basic" />} label="Basic - Mensagem e Foto - R$1,00" />
          <FormControlLabel control={<Checkbox checked={selectedOrnament === 'Silver'} onChange={handleChange} value="Silver" />} label="Silver - Mensagem, Foto e Flores - R$50,00" />
          <FormControlLabel control={<Checkbox checked={selectedOrnament === 'Gold'} onChange={handleChange} value="Gold" />} label="Gold - Mensagem, Foto, Flores e Catavento - R$80,00" />
          <Divider orientation="horizontal" flexItem sx={{ margin: 2 }} />
          <Stack spacing={2} direction='row'>
            <Button variant="contained" onClick={() => { navigate('/confirmar_compra'); }}>Comprar</Button>
          </Stack>
          <Divider orientation="horizontal" flexItem sx={{ margin: 2 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ComprarOrnamento;
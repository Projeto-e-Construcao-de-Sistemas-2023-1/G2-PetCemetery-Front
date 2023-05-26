import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function CompraJazigo() {
  const navigate = useNavigate();
  const [jazigo, setJazigo] = useState(""); // Supondo que jazigoData é um objeto com as informações do jazigo

  const handleComprar = (e) => { navigate('/ComprarOrnamento'); }

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar />
      <Container component="main" maxWidth="xs">
        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Typography variant="h5" component="h2">Jazigo Selecionado</Typography>
          <Typography variant="body1" component="p">{`Nome do Jazigo: ${jazigo.name}`}</Typography>
          <Typography variant="body1" component="p">{`Valor do Jazigo: ${jazigo.price}`}</Typography>
          <Divider orientation="horizontal" flexItem sx={{ margin: 2 }} />
          <Stack spacing={2} direction='row'>
            <Button variant="contained" onClick={() => { handleComprar(); }}>Comprar Pacote de Ornamentos</Button>
          </Stack>
          <Divider orientation="horizontal" flexItem sx={{ margin: 2 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CompraJazigo;
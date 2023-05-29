import { Button, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/realizar-doacoes.css';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });
//TODO: verificar e trocar os vários boxes por um stack em outras paginas
function RealizarDoacoes() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} />
      <Titulo texto="ONGs que ajudam os animais" />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Stack spacing={2} direction='column' divider={<Divider orientation="horizontal" flexItem />}>
          <Button variant="outlined" color="success" href="https://www.instagram.com/osindefesos/">ONG indefesos RJ</Button>
          <Button variant="outlined" color="success" href="https://amparanimal.org.br/">Ampara Animal</Button>
          <Button variant="outlined" color="success" href="https://www.suipa.org.br/">SUIPA</Button>
        </Stack>
      </Container>

    </ThemeProvider >
  );
}

export default RealizarDoacoes;
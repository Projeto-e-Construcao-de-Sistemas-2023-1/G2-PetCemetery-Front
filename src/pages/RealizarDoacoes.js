import React from 'react';
import '../Styles/realizar-doacoes.css';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Stack, Button, Typography, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });
//TODO: verificar e trocar os vários boxes por um stack em outras paginas
function RealizarDoacoes() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} />
      <Container component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Box sx={{ margin: 2 }}>
          <Typography variant="h2" align='center'>ONGs que ajudam os animais</Typography>
          <Divider orientation="horizontal" flexItem />
        </Box>

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
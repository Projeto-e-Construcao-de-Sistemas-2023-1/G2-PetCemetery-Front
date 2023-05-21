import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/editar-perfil.css';
import NavBar from '../components/NavBar';
import logo from '../logo.png';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function EditarPerfil() {
  const navigate = useNavigate();

  const handleEmail = (e) => {

  }

  const handleNome = (e) => {

  }

  const handleAlterar = (e) => { }
  const handleDesativar = (e) => { }
  //TODO refazer usando useState e state variables.

  const handleLogin = (e) => { navigate('/Home'); }
  const handleCadastro = (e) => { navigate('/Cadastro'); }
  const handleGoogle = (e) => { navigate('/Home'); }

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} />

      <Container component="main" maxWidth="xs">
        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Box sx={{ margin: 2 }}>
            <Typography variant="h2" align='center'>Perfil</Typography>
            <Divider orientation="horizontal" flexItem />
          </Box>

          <TextField margin="normal" required fullWidth name="nome" label="Nome" type="nome" id="nome" onChange={handleNome} />
          <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" onChange={handleEmail} />

          <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Stack spacing={2} direction='column' divider={<Divider orientation="horizontal" flexItem />}>
              <Button variant="contained" onClick={() => { handleAlterar(); }}>Alterar Informações da Conta</Button>
              <Button variant="contained" color="secondary" href='/Home'>Cancelar</Button>
              <Button variant="contained" color="error" onClick={() => { handleDesativar(); }}>Desativar Conta</Button>
            </Stack>
          </Box>

        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default EditarPerfil;
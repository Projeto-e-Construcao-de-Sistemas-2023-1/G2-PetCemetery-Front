import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/editar-perfil.css';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function EditarPerfil({ nome, email }) {
  const navigate = useNavigate();
  const handleDesativar = (e) => { }

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} />
      <Titulo texto="Seu Perfil" />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', width: '100%' }}>
            <Typography variant="h5">Nome</Typography>
            <TextField margin="normal" fullWidth id="nome" label="João das Neves" name="nome" disabled InputProps={{ readOnly: true, style: { color: 'white' }, }} InputLabelProps={{ style: { color: 'white' }, }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', width: '100%' }}>
            <Typography variant="h5">Email</Typography>
            <TextField margin="normal" fullWidth id="email" label="joaodasneves@example.com" name="email" disabled InputProps={{ readOnly: true, style: { color: 'white' }, }} InputLabelProps={{ style: { color: 'white' }, }} />
          </Box>
        </Box>

        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Stack spacing={2} direction='column' divider={<Divider orientation="horizontal" flexItem />}>
            <Button variant="contained" href='/AlterarPerfil'>Alterar Informações da Conta</Button>
            <Button variant="contained" color="secondary" href='/Home'>Cancelar</Button>
            <Button variant="contained" color="error" onClick={() => { handleDesativar(); }}>Desativar Conta</Button>
          </Stack>
        </Box>
      </Box>

    </ThemeProvider>
  );
}

export default EditarPerfil;
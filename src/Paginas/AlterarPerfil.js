import { Button, Stack, Typography, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/alterar-perfil.css';
import NavBar from '../components/NavBar';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function AlterarPerfil() {
  const navigate = useNavigate();

  const handleEmail = (e) => {

  }

  const handleNome = (e) => {

  }

  const handleAlterar = (e) => { }

  //TODO refazer usando useState e state variables.

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar isLoggedIn={true} />

      <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Box sx={{ margin: 2 }}>
          <Typography variant="h2" align='center'>Alterar Perfil</Typography>
          <Divider orientation="horizontal" flexItem />
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid item >
              <TextField margin="normal" required fullWidth id="nome" label="Nome" name="nome" onChange={handleNome} />
            </Grid>
            <Grid item>
              <TextField margin="normal" required fullWidth name="email" label="Email" type="email" id="email" onChange={handleEmail} />
            </Grid>
            <Grid item>
              <TextField margin="normal" required fullWidth name="cpf" label="CPF" type="cpf" id="cpf" onChange={handleEmail} />
            </Grid>
            <Grid item>
              <TextField margin="normal" required fullWidth name="telefone" label="Telefone" type="telefone" id="telefone" onChange={handleEmail} />
            </Grid>
            <Grid item>
              <TextField margin="normal" required fullWidth name="senha" label="Senha" type="senha" id="senha" onChange={handleEmail} />
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid item>
              <TextField margin="normal" required fullWidth name="rua" label="Rua" type="rua" id="rua" onChange={handleEmail} />
            </Grid>
            <Grid item>
              <TextField margin="normal" required fullWidth name="numero" label="Numero" type="numero" id="numero" onChange={handleEmail} />
            </Grid>
            <Grid item>
              <TextField margin="normal" required fullWidth name="complemento" label="Complemento" type="complemento" id="complemento" onChange={handleEmail} />
            </Grid>
            <Grid item>
              <TextField margin="normal" required fullWidth name="cep" label="CEP" type="cep" id="cep" onChange={handleEmail} />
            </Grid>
            <Grid item>
              <TextField margin="normal" required fullWidth name="senharepeat" label="Repita a senha" type="senharepeat" id="senharepeat" onChange={handleEmail} />
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Stack spacing={2} direction='column' divider={<Divider orientation="horizontal" flexItem />}>
            <Button variant="contained" color="error" onClick={() => { handleAlterar(); }}>Alterar</Button>
            <Button variant="contained" color="secondary" href='/EditarPerfil'>Cancelar</Button>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AlterarPerfil;
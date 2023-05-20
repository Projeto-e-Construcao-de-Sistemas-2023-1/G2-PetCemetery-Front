import React, { useState } from 'react';
import '../Styles/login.css';
import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';
import { Stack, Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Login() {
  const navigate = useNavigate();
  var emailInput = "", passwordInput = "";

  const navegacao = useNavigate();
  navegacao('/Login')
  const [email] = useState('');
  const [senha] = useState('');

  const handleEmail = (e) => {
    emailInput = e.target.value;
    console.log(emailInput);
  }

  const handlePassword = (e) => {
    passwordInput = e.target.value;
    console.log(passwordInput);
  }
  //TODO refazer usando useState e state variables.

  const handleLogin = (e) => { navigate('/Home'); }
  const handleCadastro = (e) => { navigate('/Cadastro'); }
  const handleGoogle = (e) => { navigate('/Home'); }

  return (

    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <img src={logo} alt="logo" class='logo'></img>
      <Container component="main" maxWidth="xs">
        <Box sx={{ position: "fixed", top: 0, left: 0, zIndex: 2000, padding: 2 }}>
          <Button variant="contained" href="/">Voltar</Button>
        </Box>
        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Box sx={{ margin: 2 }}>
            <Typography variant="h2" align='center'>Login</Typography>
            <Divider orientation="horizontal" flexItem />

            <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus onChange={handleEmail} />
            <TextField margin="normal" required fullWidth name="password" label="Senha" type="password" id="password" autoComplete="current-password" onChange={handlePassword} />

            <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Stack spacing={2} direction='row'>
                <Button variant="contained" onClick={() => { handleLogin(); }}>Login</Button>
                <Button variant="contained" color="secondary" onClick={() => { handleCadastro(); }}>Cadastro</Button>
              </Stack>
              <Box sx={{ margin: 2 }}>
                <Button variant="contained" onClick={() => { handleGoogle(); }}>Login com Google</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
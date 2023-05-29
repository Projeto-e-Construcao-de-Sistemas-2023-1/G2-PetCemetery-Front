import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css';
import NavBar from '../components/NavBar';
import Titulo from '../components/Titulo';
import logo from '../logo.png';
import { loginPost } from '../components/api';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Login() {
  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const handleEmail = (e) => {
    setEmailInput(e.target.value);
    console.log(emailInput);
  }

  const handlePassword = (e) => {
    setPasswordInput(e.target.value);
    console.log(passwordInput);
  }

  //TODO sistema de cpfs para clientes

  const handleLogin = async (e) => { //formato: STATUS;tipo_cliente;cpf
    let resp = await loginPost(emailInput, passwordInput);
    console.log(resp);

    if (resp != null) resp = resp.split(';');
    else { console.log("Resposta do back = null"); setErrMsg("Erro na conexão com o servidor. Verifique sua rede"); return; }

    if (resp[0] == "OK") {
      if (resp[1] == "cliente") {
        navigate(`/Home?cpf=${resp[2]}`);
      } else if (resp[1] == "admin") {
        navigate('/HomeAdmin');
      }
    }
    else if (resp[0] == "ERR") {
      console.log("ERRO! motivo: " + resp[1]);
      if (resp[1] == "email_invalido") setErrMsg("Email inválido");
      else if (resp[1] == "senha_invalida") setErrMsg("Senha inválida");
    }
    else {
      console.log("Erro na formatacao de resposta do servidor");
      setErrMsg("Erro na formatação de resposta do servidor");
    }
  }

  const handleCadastro = (e) => { navigate('/Cadastro'); }
  const handleGoogle = (e) => { navigate('/Home'); }

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <NavBar />
      <Titulo texto="Login" />
      <img src={logo} alt="logo" className='logo'></img>
      <Container component="main" maxWidth="xs">
        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

          <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus onChange={handleEmail} />
          <TextField margin="normal" required fullWidth name="senha" label="Senha" type="password" id="senha" autoComplete="current-password" onChange={handlePassword} />

          <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Stack spacing={2} direction='row'>
              <Button variant="contained" onClick={() => { handleLogin(); }}>Login</Button>
              <Button variant="contained" color="secondary" onClick={() => { handleCadastro(); }}>Cadastro</Button>
            </Stack>
            <Divider orientation="horizontal" flexItem sx={{ margin: 2 }} />
            <Box>
              <Button variant="contained" onClick={() => { handleGoogle(); }}>Login com Google</Button>
            </Box>
          </Box>
          <Typography variant="h6" color="error" align='center'>{errMsg}</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
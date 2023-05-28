import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/mapa-jazigos.css';
import NavBar from '../components/NavBar';
import { loginPost } from '../components/api';
import Mapa from '../components/Mapa';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function MapaJazigos() {
  const navigate = useNavigate();
  var emailInput = "", passwordInput = "";
  const [errMsg, setErrMsg] = useState("");

  const handleEmail = (e) => {
    emailInput = e.target.value;
    console.log(emailInput);
  }

  const handlePassword = (e) => {
    passwordInput = e.target.value;
    console.log(passwordInput);
  }
  //TODO refazer usando useState e state variables.

  const handleLogin = async (e) => { //formato: STATUS;tipo_cliente;cpf
    let resp = await loginPost(emailInput, passwordInput);
    console.log(resp);

    resp = resp.split(';');

    if (resp[0] == "OK") {
      if (resp[1] == "cliente") {
        navigate('/Home');
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
      <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <Box sx={{ margin: 2 }}>
          <Typography variant="h2" align='center'>Mapa</Typography>
          <Divider orientation="horizontal" flexItem />
        </Box>

        <Mapa />

        <Typography variant="h6" color="error" align='center'>{errMsg}</Typography>
      </Box>

    </ThemeProvider>
  );
}

export default MapaJazigos;
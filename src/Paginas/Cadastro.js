import React, { useState } from 'react';
import '../Styles/login.css';
import { useNavigate } from 'react-router-dom';
import { Stack, Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
const mainTheme = createTheme({ palette: { mode: 'dark', }, });

function Cadastro() {
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

  const handleCadastro = (e) => { navigate('/Home'); }

  return (

    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box sx={{ position: "fixed", top: 0, left: 0, zIndex: 2000, padding: 2 }}>
          <Button variant="contained" href="/">Voltar</Button>
        </Box>
        <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Box sx={{ margin: 2 }}>
            <Typography variant="h2" align='center'>Cadastro</Typography>
            <Divider orientation="horizontal" flexItem />

            <TextField margin="normal" required fullWidth id="nome" label="Nome" name="nome" onChange={handleEmail} />
            <TextField margin="normal" required fullWidth name="email" label="Email" type="email" id="email" onChange={handleEmail} />
            <TextField margin="normal" required fullWidth name="cpf" label="CPF" type="cpf" id="cpf" onChange={handleEmail} />
            <TextField margin="normal" required fullWidth name="telefone" label="Telefone" type="telefone" id="telefone" onChange={handleEmail} />
            <TextField margin="normal" required fullWidth name="cep" label="CEP" type="cep" id="cep" onChange={handleEmail} />
            <TextField margin="normal" required fullWidth name="rua" label="Rua" type="rua" id="rua" onChange={handleEmail} />
            <TextField margin="normal" required fullWidth name="numero" label="Numero" type="numero" id="numero" onChange={handleEmail} />
            <TextField margin="normal" required fullWidth name="complemento" label="Complemento" type="complemento" id="complemento" onChange={handleEmail} />

            <TextField margin="normal" required fullWidth name="senha" label="Senha" type="senha" id="senha"onChange={handleEmail} />
            <TextField margin="normal" required fullWidth name="senharepeat" label="Repita a senha" type="senharepeat" id="senharepeat"onChange={handleEmail} />

            <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Button variant="contained" href="/Home" onClick={() => { handleCadastro(); }}>Cadastro</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Cadastro;